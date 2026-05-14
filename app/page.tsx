import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black text-white scroll-smooth">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <h1 className="tracking-[0.35em] text-sm">
            LSPB PARIS
          </h1>

          <nav className="flex gap-8 text-sm text-neutral-300">
            <a href="#gallery" className="hover:text-white transition">
              Galerie
            </a>

            <a href="#story" className="hover:text-white transition">
              Histoire
            </a>

            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">

        <Image
          src="/hero-new.png"
          alt="LSPB Paris"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-2xl px-8 md:px-20 pt-20">

            <p className="tracking-[0.4em] text-sm text-neutral-300 mb-6">
              PROCHAINE COLLECTION
            </p>

            <h2 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
              Le luxe féminin qui ose provoquer.
            </h2>

            <p className="text-lg text-neutral-200 max-w-xl mb-10">
              Découvrez l’univers de LSPB Paris et soyez informée
              de la sortie de notre prochaine collection.
            </p>

            <a
              href="#contact"
              className="inline-block bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-neutral-200 transition"
            >
              Être informée de la sortie
            </a>

          </div>
        </div>

      </section>

      {/* GALLERY */}
      <section
        id="gallery"
        className="max-w-7xl mx-auto px-6 py-28"
      >

        <p className="tracking-[0.35em] text-sm text-neutral-500 mb-4">
          GALERIE
        </p>

        <h2 className="text-4xl md:text-5xl font-serif mb-16">
          Réalisations actuelles
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="aspect-[3/4] bg-neutral-900 rounded-3xl overflow-hidden border border-white/10"
            >
              <div className="w-full h-full bg-gradient-to-b from-neutral-800 to-black" />
            </div>
          ))}

        </div>

      </section>

      {/* STORY */}
      <section
        id="story"
        className="border-t border-white/10"
      >

        <div className="max-w-4xl mx-auto px-6 py-28 text-center">

          <p className="tracking-[0.35em] text-sm text-neutral-500 mb-4">
            HISTOIRE
          </p>

          <h2 className="text-4xl md:text-5xl font-serif mb-10">
            Une vision parisienne du luxe féminin
          </h2>

          <p className="text-lg leading-9 text-neutral-300">
            LSPB Paris est née du désir de créer une esthétique
            féminine élégante, audacieuse et inoubliable.
            Une maison pensée pour les femmes qui souhaitent
            affirmer leur présence avec distinction.
          </p>

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-white/10"
      >

        <div className="max-w-3xl mx-auto px-6 py-28">

          <div className="text-center mb-14">

            <p className="tracking-[0.35em] text-sm text-neutral-500 mb-4">
              CONTACT
            </p>

            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Être informée de la sortie
            </h2>

            <p className="text-neutral-400">
              Laissez vos coordonnées pour être prévenue
              du lancement de la prochaine collection.
            </p>

          </div>

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Nom"
              className="w-full bg-neutral-900 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-white transition"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full bg-neutral-900 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-white transition"
            />

            <textarea
              placeholder="Message (facultatif)"
              rows={5}
              className="w-full bg-neutral-900 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-white transition"
            />

            <button
              type="submit"
              className="w-full bg-white text-black py-5 rounded-2xl font-medium hover:bg-neutral-200 transition"
            >
              Rejoindre la liste d’attente
            </button>

          </form>

        </div>

      </section>

    </main>
  );
}