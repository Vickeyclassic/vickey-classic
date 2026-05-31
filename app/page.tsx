import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-yellow-500/20">
  <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
    <h1 className="text-xl font-bold text-yellow-400">
      VICKEY CLASSIC
    </h1>

    <div className="flex gap-6 text-zinc-300">
      <a href="#about" className="hover:text-yellow-400">
        About
      </a>
      <a href="#focus" className="hover:text-yellow-400">
        Focus
      </a>
      <a
        href="https://instagram.com/vickey_classic"
        target="_blank"
        className="hover:text-yellow-400"
      >
        Instagram
      </a>
    </div>
  </div>
</nav>
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-zinc-950" />

        <div className="relative z-10 max-w-6xl text-center">
         <img
              src="/hero.jpeg"
              alt="Vickey Classic"
              className="mx-auto mb-6 h-[450px] w-[320px] md:h-[650px] md:w-[450px] rounded-[32px] object-cover object-top border border-yellow-500/30 shadow-[0_0_50px_rgba(250,204,21,0.25)]"
              />

          <h1 className="hero-title text-5xl md:text-7xl font-bold tracking-widest [font-family:var(--font-playfair)]">
            VICKEY
            <br />
            CLASSIC
          </h1>

          <p className="mt-4 text-lg text-zinc-400">
           Building Strength • Creating Value • Living Without Limits
          </p>

          

          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="https://instagram.com/vickey_classic"
              target="_blank"
              className="flex items-center justify-center gap-2 rounded-xl border border-yellow-500 px-6 py-3 hover:bg-yellow-500 hover:text-black transition"
            >
              <FaInstagram />
              Instagram
            </a>

            <a
              href="https://wa.me/919360767752"
              target="_blank"
              className="flex items-center justify-center gap-2 rounded-xl bg-yellow-500 px-6 py-3 text-black font-semibold hover:scale-105 transition"
            >
              <FaWhatsapp />
              Let's Connect
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/about.jpeg"
            alt="About"
            className="rounded-3xl shadow-2xl"
          />

          <div>
            <h2 className="text-4xl font-bold mb-6 text-yellow-500">
              About Me
            </h2>

            <p className="text-zinc-300 leading-8">
              Passionate about entrepreneurship,
              technology, psychology, fitness,
              and continuous self-improvement.
            </p>

            <p className="mt-6 text-zinc-400 leading-8">
              Focused on creating value, building meaningful
              projects, and living with discipline every day.
            </p>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
        <section id="focus" className="px-6 py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-4xl font-bold mb-12 text-yellow-500">
            Focus Areas
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "💪 Fitness & Nutrition",
              "🧠 Psychology",
              "💻 Technology",
              "🚀 Entrepreneurship",
              "📈 Self Development",
              "📚 Lifelong Learning",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-zinc-800 p-6 bg-black"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <br></br>
      <footer className="py-20 text-center">
        <h3 className="text-3xl font-bold">
          Conquer Yourself.
        </h3>
        
        <p className="mt-4 text-lg text-zinc-400">
          Everything Else Follows.
        </p>
      </footer>
    </main>
  );
}