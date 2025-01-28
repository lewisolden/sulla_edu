import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center p-4">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold">Welcome to CryptoLearn</h1>
        <p className="text-lg text-gray-600">Your gateway to understanding cryptocurrency and blockchain technology.</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        <div className="p-6 border rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Module 1: Fundamentals of Cryptocurrency</h2>
          <p className="text-gray-700 mt-2">Learn the basics of cryptocurrency, including Bitcoin and altcoins.</p>
          <Link href="/module1">
            <a className="text-blue-500 mt-4 block">Learn More</a>
          </Link>
        </div>

        <div className="p-6 border rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Module 2: What is a Blockchain?</h2>
          <p className="text-gray-700 mt-2">Understand blockchain technology and its applications.</p>
          <Link href="/module2">
            <a className="text-blue-500 mt-4 block">Learn More</a>
          </Link>
        </div>

        <div className="p-6 border rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Module 3: Blockchain Technology</h2>
          <p className="text-gray-700 mt-2">Dive deeper into advanced blockchain concepts and platforms.</p>
          <Link href="/module3">
            <a className="text-blue-500 mt-4 block">Learn More</a>
          </Link>
        </div>
      </section>

      <footer className="text-center my-8">
        <p className="text-sm text-gray-500">&copy; 2025 CryptoLearn. All rights reserved.</p>
      </footer>
    </main>
  );
}
