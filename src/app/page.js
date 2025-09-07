import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-extrabold mb-4">Welcome to 4YOL</h1>
        <p className="text-lg text-center max-w-xl">
          We are building this site step-by-step. 👋 Start editing files in <code>src/app</code> and watch changes live.
                </p>


      <div className="mt-6 flex gap-3">
        <Link href="/about" className="px-4 py-2 rounded bg-gray-900 text-white">About</Link>
        <Link href="/blog" className="px-4 py-2 rounded border">Blog</Link>
        <Link href="/news/general" className="px-4 py-2 rounded border">News</Link>
      </div>
    </main>
  );
}

