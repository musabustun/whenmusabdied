import { motion } from 'framer-motion'

const testimonials = [
  {
    name: "Steve Jobs",
    title: "Apple Kurucu Ortak",
    quote: "Eğer Musab benden önce doğmuş olsaydı, Apple'ı o kurardı. Ve muhtemelen her cihaz sadece Parliament mavisi renginde çıkardı.",
    image: ""
  },
  {
    name: "Elon Musk",
    title: "Tesla & SpaceX CEO",
    quote: "Mars'a gitmek için roketlere gerek yok. Musab'ın egosu atmosferi zaten aşıyordu.",
    image: "🚀"
  },
  {
    name: "Bill Gates",
    title: "Microsoft Kurucu Ortak",
    quote: "Windows her mavi ekran verdiğinde aslında içten içe Musab'ın kodlarını kıskanıp ağlıyor.",
    image: "🪟"
  },
  {
    name: "Sam Altman",
    title: "OpenAI CEO",
    quote: "ChatGPT'ye sadece Musab'ın kodlarını eğitmeyi denedik, yapay zeka depresyona girip kendi kendini sildi.",
    image: "🧠"
  }
]

export default function Testimonials() {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-32 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-white px-8 inline-block border-b-4 border-red-800 pb-4 uppercase tracking-[0.2em]">
          Teknoloji Devlerinin Vedası
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="bg-zinc-900/40 p-8 rounded-2xl border border-zinc-800 hover:border-red-900/50 transition-colors group relative overflow-hidden backdrop-blur-sm"
          >
            <div className="absolute -top-6 -right-6 text-9xl opacity-5 group-hover:scale-110 transition-transform duration-500 group-hover:opacity-10">
              {t.image}
            </div>

            <div className="text-4xl text-red-700/50 font-serif absolute top-6 left-6">"</div>

            <div className="relative z-10 pl-8">
              <p className="text-gray-300 font-serif italic text-xl mb-6 leading-relaxed">
                {t.quote}
              </p>

              <div className="flex items-center gap-4 border-t border-zinc-800 pt-4">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-2xl border border-zinc-700">
                  {t.image}
                </div>
                <div>
                  <div className="font-bold text-white tracking-wide">{t.name}</div>
                  <div className="text-sm text-red-500 font-mono">{t.title}</div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}