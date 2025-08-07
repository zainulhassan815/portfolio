import Image from 'next/image';
import Projects from '@/components/sections/projects';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-center text-4xl font-bold">Welcome to my Portfolio!</h1>
      <p className="mt-4 text-center text-lg">
        This is a simple page created with Next.js and Tailwind CSS.
      </p>
      <div className="mt-8">
        <Image src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
      </div>
      <Projects />
    </main>
  );
}
