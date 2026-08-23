"use server";

import { Resend } from "resend";
import { EMAIL } from "@/lib/content";

export type ContactState = {
  ok: boolean;
  message: string;
  /** field name -> error, so the client can mark the right input */
  errors?: Record<string, string>;
};

const MAX = { name: 120, email: 200, type: 80, budget: 40, message: 5000 };

function clean(v: FormDataEntryValue | null, max: number) {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function sendMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const name = clean(formData.get("name"), MAX.name);
  const email = clean(formData.get("email"), MAX.email);
  const type = clean(formData.get("type"), MAX.type);
  const budget = clean(formData.get("budget"), MAX.budget);
  const message = clean(formData.get("message"), MAX.message);

  // Bots fill hidden fields; humans do not.
  if (clean(formData.get("company"), 200)) {
    return { ok: true, message: "Message received. I'll reply within one business day." };
  }

  const errors: Record<string, string> = {};
  if (!name) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Please enter a valid email address.";
  if (!message) errors.message = "Please tell me about your project.";
  if (Object.keys(errors).length) {
    const first = Object.keys(errors)[0];
    return { ok: false, message: `Check ${first} and try again.`, errors };
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    // Never claim delivery that did not happen.
    console.error("RESEND_API_KEY is not set; contact message was not sent.");
    return {
      ok: false,
      message: `Something went wrong on my end. Please email ${EMAIL} directly.`,
    };
  }

  try {
    const resend = new Resend(key);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM ?? "Dreamers Lab <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO ?? EMAIL],
      replyTo: email,
      subject: `New project enquiry from ${name}`,
      text: [
        `Name:    ${name}`,
        `Email:   ${email}`,
        `Type:    ${type || "not specified"}`,
        `Budget:  ${budget || "not specified"}`,
        "",
        message,
      ].join("\n"),
      html: `
        <table style="font:14px/1.6 -apple-system,system-ui,sans-serif">
          <tr><td><b>Name</b></td><td>${escape(name)}</td></tr>
          <tr><td><b>Email</b></td><td>${escape(email)}</td></tr>
          <tr><td><b>Type</b></td><td>${escape(type) || "not specified"}</td></tr>
          <tr><td><b>Budget</b></td><td>${escape(budget) || "not specified"}</td></tr>
        </table>
        <hr />
        <p style="font:15px/1.7 -apple-system,system-ui,sans-serif;white-space:pre-wrap">${escape(message)}</p>
      `,
    });

    if (error) throw new Error(error.message);
    return { ok: true, message: "Message received. I'll reply within one business day." };
  } catch (err) {
    console.error("Contact send failed:", err);
    return {
      ok: false,
      message: `That didn't send. Please email ${EMAIL} directly and I'll pick it up.`,
    };
  }
}
