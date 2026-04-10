import { motion } from 'framer-motion'

const news = [
  "SON DAKİKA: Dünya genelinde klavye tuşlarına basma sesi kirliliği %10 azaldı...",
  "ChatGPT sunucuları, daha az debug isteği geldiği için uyku moduna geçti...",
  "Yazılım dünyasında çözülemeyen bug oranı aniden tavan yaptı...",
  "Küresel kahve tüketiminde açıklanamayan %5'lik ani düşüş...",
  "StackOverflow yetkilileri trafik düşüşünün sebebini araştırıyor...",
];

export default function NewsTicker() {
  return (
    <div className="w-full bg-red-900/20 border-y border-red-500/30 py-3 overflow-hidden flex whitespace-nowrap mt-16">
      <div className="bg-red-700 text-white px-4 py-1 font-bold tracking-wider absolute left-0 z-10 hidden md:block border border-red-500">
        ÖZEL HABER
      </div>

      <motion.div
        animate={{ x: [0, -2000] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30
        }}
        className="flex gap-16 md:pl-48"
      >
        {[...news, ...news, ...news].map((item, i) => (
          <span key={i} className="text-red-200 font-mono">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}