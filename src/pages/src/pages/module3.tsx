import React from 'react';
import Link from 'next/link';

export default function Module3Page() {
  return (
    <main className="p-4">
      <header className="my-8 text-center">
        <h1 className="text-3xl font-bold">Module 3: Blockchain Technology</h1>
        <p className="text-lg text-gray-600">Dive into advanced blockchain concepts and explore its real-world applications.</p>
      </header>

      <section className="max-w-3xl mx-auto">
        <article className="my-6">
          <h2 className="text-2xl font-semibold">Blockchain Scalability</h2>
          <p className="mt-2 text-gray-700">Understand the challenges of scaling blockchain networks and the solutions being developed to overcome these issues.</p>
        </article>

        <article className="my-6">
          <h2 className="text-2xl font-semibold">Interoperability</h2>
          <p className="mt-2 text-gray-700">Learn how blockchains communicate with each other and the importance of interoperability for widespread adoption.</p>
        </article>

        <article className="my-6">
          <h2 className="text-2xl font-semibold">Blockchain Use Cases</h2>
          <p className="mt-2 text-gray-700">Explore real-world applications of blockchain technology in industries like healthcare, finance, and supply chain management.</p>
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
