import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black text-white">

      <section className="relative h-screen w-full overflow-hidden">

        <Image
          src="/hero.png"
          alt="LSPB Paris"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-2xl px-8 md:px-20">

            <p className="text-sm tracking-[0.4em] text-neutral-300 mb-6">
              LSPB PARIS
            </p>

            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
              Le luxe féminin qui ose provoquer.
            </h1>

            <p className="text-lg text-neutral-200 max-w-xl mb-10">
              Une maison parisienne entre élégance, pouvoir et désir.
            </p>

            <div className="flex gap-4 flex-wrap">

              <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-neutral-200 transition">
                Découvrir
              </button>

              <button className="border border-white/70 px-8 py-4 rounded-full hover:bg-white hover:text-black transition">
                Contact
              </button>

            </div>

          </div>
        </div>

      </section>

    </main>
  );
}