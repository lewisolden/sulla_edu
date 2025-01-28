import React from 'react';
import Link from 'next/link';

export default function Module1Page() {
  return (
    <main className="p-4">
      <header className="my-8 text-center">
        <h1 className="text-3xl font-bold">Module 1: Fundamentals of Cryptocurrency</h1>
        <p className="text-lg text-gray-600">Understand the basics of cryptocurrency, including Bitcoin, altcoins, and blockchain technology.</p>
      </header>

      <section className="max-w-3xl mx-auto">
        <article className="my-6">
          <h2 className="text-2xl font-semibold">Introduction to Digital Currencies</h2>
          <p className="mt-2 text-gray-700">Learn about digital currencies and how they are transforming financial systems. Understand the history and evolution of money leading to the advent of cryptocurrencies.</p>
        </article>

        <article className="my-6">
          <h2 className="text-2xl font-semibold">Bitcoin: The First Cryptocurrency</h2>
          <p className="mt-2 text-gray-700">Explore Bitcoin's creation, its underlying technology, and its role in solving the double-spending problem. Understand its consensus mechanism, transaction model, and monetary policy.</p>
        </article>

        <article className="my-6">
          <h2 className="text-2xl font-semibold">Altcoins and Tokens</h2>
          <p className="mt-2 text-gray-700">Discover the world of altcoins and tokens, their unique features, and how they differ from Bitcoin. Learn about key altcoins, ICOs, and market metrics.</p>
        </article>
      </section>

      <footer className="text-center mt-8">
        <Link href="/">
          <a className="text-blue-500">Back to Homepage</a>
        </Link>
      </footer>
    </main>
  );
}
