// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <header className="w-full py-4 px-6 bg-white shadow-md">
        <div className="max-w-5xl mx-auto">
          <Link href="/">
            <h1 className="text-3xl font-bold text-indigo-600 cursor-pointer">PAVAN_AV</h1>
          </Link>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center max-w-2xl text-center px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Welcome to PAVAN_AV
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          An interactive video Streaming platform
        </p>
        
        <div className="space-y-4">
          <Link href="/home">
            <div className="bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition cursor-pointer">
              View our page
            </div>
          </Link>
        </div>
      </main>

      <footer className="w-full py-4 bg-gray-100 border-t">
        <div className="max-w-5xl mx-auto text-center text-gray-500">
          &copy; {new Date().getFullYear()} PAVAN_AV. All rights reserved.
        </div>
      </footer>
    </div>
  );
}