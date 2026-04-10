import { motion } from 'framer-motion'
import { Clock, Skull, Flame, TrendingDown, Coffee, Code2 } from 'lucide-react'

const timeline = [
  {
    time: "Saat 00:00 - Gidiş",
    title: "Sistem Çevrimdışı",
    desc: "Musab'ın son Commit'i atıldı. GitHub reposundaki yeşil noktalar bir anda kan kırmızısına döndü.",
    icon: Skull,
    color: "text-red-500",
    bg: "bg-red-500/10"
  },
  {
    time: "Saat 01:30 - İlk Kriz",
    title: "Nescafe Hisseleri Çakıldı",
    desc: "Bölgesel satışlardaki açıklanamayan durma nedeniyle Nestlé acil durum toplantısı düzenledi.",
    icon: Coffee,
    color: "text-yellow-600",
    bg: "bg-yellow-600/10"
  },
  {
    time: "Saat 04:00 - Kaos Büyüyor",
    title: "Yapay Zeka İsyanı",
    desc: "ChatGPT ve Claude, Musab'ın kodları olmadan öğrenecek bir şeyleri kalmadığını belirterek yanıt vermeyi reddetti.",
    icon: Code2,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    time: "Saat 08:00 - Küresel Çöküş",
    title: "StackOverflow İflası",
    desc: "Trafik %98 düştü. Kalan %2'lik kesim sadece 'Musab neden gitti?' diye arama yapanlardı.",
    icon: TrendingDown,
    color: "text-orange-500",
    bg: "bg-orange-500/10"
  },
  {
    time: "Saat 12:00 - Apocalypse",
    title: "Dünyanın Sonu",
    desc: "Parliament Midnight Blue fabrikaları müze yapıldı. Kod yazmak artık ilkel bir sanat dalı olarak kabul ediliyor.",
    icon: Flame,
    color: "text-red-600",
    bg: "bg-red-600/10"
  }
]

export default function DoomsdayTimeline() {
  return (
    <div className="max-w-3xl mx-auto px-4 mt-32 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-white px-8 inline-block border-b-4 border-red-800 pb-4 uppercase tracking-[0.2em]">
          Kıyamet Günlüğü
        </h2>
      </div>

      <div className="relative border-l-2 border-zinc-800 ml-4 md:ml-0 md:pl-0">
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="mb-12 md:ml-8 pl-8 md:pl-0 relative flex flex-col md:flex-row gap-6 items-start"
          >
            {/* Timeline Dot */}
            <div className={`absolute -left-[41px] md:-left-[25px] w-12 h-12 rounded-full border-4 border-[#050505] ${item.bg} flex items-center justify-center z-10`}>
              <item.icon className={`w-5 h-5 ${item.color}`} />
            </div>

            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800/80 hover:border-zinc-600 transition-colors flex-1 w-full relative group">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-zinc-500" />
                <span className="text-red-500 font-mono font-bold text-sm">{item.time}</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-3 tracking-wide">{item.title}</h3>
              <p className="text-zinc-400 leading-relaxed">
                {item.desc}
              </p>

              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}