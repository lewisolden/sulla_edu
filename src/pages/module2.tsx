import React from 'react';
import Link from 'next/link';

export default function Module2Page() {
  return (
    <main className="p-4">
      <header className="my-8 text-center">
        <h1 className="text-3xl font-bold">Module 2: What is a Blockchain?</h1>
        <p className="text-lg text-gray-600">Understand the structure, features, and applications of blockchain technology.</p>
      </header>

      <section className="max-w-3xl mx-auto">
        <article className="my-6">
          <h2 className="text-2xl font-semibold">What is a Blockchain?</h2>
          <p className="mt-2 text-gray-700">Learn about blockchain as a distributed ledger, its decentralised nature, and its ability to secure data transparently.</p>
        </article>

        <article className="my-6">
          <h2 className="text-2xl font-semibold">Consensus Mechanisms</h2>
          <p className="mt-2 text-gray-700">Explore how consensus mechanisms like Proof of Work (PoW) and Proof of Stake (PoS) ensure agreement in blockchain networks.</p>
        </article>

        <article className="my-6">
          <h2 className="text-2xl font-semibold">Smart Contracts</h2>
          <p className="mt-2 text-gray-700">Discover how smart contracts automate agreements, enabling trustless and efficient transactions on blockchain platforms.</p>
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
