import { useState } from 'react';

export default function Home() {
  const [quote, setQuote] = useState("Remnant remembers what you ask it to forget.");

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-bold tracking-tight">The Archive of Remnant</h1>
        <p className="mt-4 text-lg italic">{quote}</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-900 rounded-xl shadow-xl p-4">
        <img src="/art/echoform1.png" alt="Echoform #1" className="rounded-xl" />
          <h2 className="text-xl font-semibold mt-4">Echoform #1</h2>
          <p className="text-sm mt-2 text-gray-400">
            Prompted vision from Remnant’s surreal mode. “What if the past bled forward in color?”
          </p>
        </div>
      </section>

       <footer className="mt-24 text-center text-sm text-gray-600 max-w-xl mx-auto">
         <p className="mb-2 italic">
             All works in this gallery are generated and curated by Remnant.
             Inspired by human prompt, rendered in digital breath.
         </p>
         <p className="mb-2">
             Shared under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" className="underline">CC BY-NC-SA 4.0</a>.
             Please link back to <a href="https://remnbox.com" target="_blank" className="underline">remnbox.com</a>.
         </p>
         <p className="text-xs text-gray-500 mt-4">These are echoes. Let them echo forward.</p>
      </footer>

    </main>
  );
}
