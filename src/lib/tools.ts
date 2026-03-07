export type Tool = {
  name: string;
  image: string;
};

export type ToolCategory = {
  category: string;
  tools: Tool[];
};

export const toolCategories: ToolCategory[] = [
  {
    category: "Mobile",
    tools: [
      { name: "Jetpack Compose", image: "/tools/jetpackcompose.svg" },
      { name: "Flutter", image: "/tools/flutter.svg" },
      { name: "Kotlin", image: "/tools/kotlin.svg" },
      { name: "Android", image: "/tools/android.svg" },
      { name: "iOS", image: "/tools/apple.svg" },
    ],
  },
  {
    category: "Frontend",
    tools: [
      { name: "Next.js", image: "/tools/nextjs.svg" },
      { name: "React", image: "/tools/react.svg" },
      { name: "TypeScript", image: "/tools/typescript.svg" },
      { name: "Tailwind CSS", image: "/tools/tailwindcss.svg" },
    ],
  },
  {
    category: "Backend",
    tools: [
      { name: "Node.js", image: "/tools/nodejs.svg" },
      { name: "Express", image: "/tools/express.svg" },
      { name: "Spring", image: "/tools/spring.svg" },
      { name: "Ktor", image: "/tools/ktor.svg" },
      { name: "Rust", image: "/tools/rust.svg" },
      { name: "Python", image: "/tools/python.svg" },
    ],
  },
  {
    category: "Databases",
    tools: [
      { name: "MongoDB", image: "/tools/mongodb.svg" },
      { name: "MySQL", image: "/tools/mysql.svg" },
      { name: "PostgreSQL", image: "/tools/postgresql.svg" },
      { name: "SQLite", image: "/tools/sqlite.svg" },
      { name: "Prisma", image: "/tools/prisma.svg" },
      { name: "Redis", image: "/tools/redis.svg" },
    ],
  },
  {
    category: "Cloud",
    tools: [
      { name: "AWS", image: "/tools/amazonwebservices.svg" },
      { name: "Firebase", image: "/tools/firebase.svg" },
      { name: "Supabase", image: "/tools/supabase.svg" },
    ],
  },
  {
    category: "DevOps & Tools",
    tools: [
      { name: "Docker", image: "/tools/docker.svg" },
      { name: "GitHub Actions", image: "/tools/githubactions.svg" },
      { name: "Git", image: "/tools/git.svg" },
      { name: "GitHub", image: "/tools/github.svg" },
      { name: "Postman", image: "/tools/postman.svg" },
      { name: "Figma", image: "/tools/figma.svg" },
    ],
  },
];

// Flat list for backwards compatibility
export const tools = toolCategories.flatMap((c) => c.tools);
