import { motion } from 'framer-motion'
import { Crown } from 'lucide-react'

export default function Hero() {
  return (
    <div className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="mb-8 relative"
      >
        <Crown className="w-32 h-32 text-yellow-500 mx-auto drop-shadow-[0_0_35px_rgba(234,179,8,0.5)]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-red-500 font-mono tracking-[0.4em] uppercase text-sm md:text-base mb-6 font-bold"
      >
        Dünyanın En İyi Yazılımcısına Veda
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-6xl md:text-[8rem] leading-none font-black mb-4 tracking-tighter"
      >
        MUSAB <span className="text-red-600">USTUN</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="flex items-center gap-4 text-xl md:text-3xl text-zinc-500 font-mono mb-10 font-bold tracking-widest"
      >
        <span>5 Eki 2007</span>
        <span className="text-red-600 filter drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]">—</span>
        <span>∞</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="max-w-4xl mx-auto border-l-4 border-red-600 pl-6 text-left italic bg-gradient-to-r from-zinc-900/80 to-transparent p-6 shadow-2xl relative"
      >
        <div className="absolute -left-2 -top-2 text-6xl text-red-900/40 font-serif">"</div>
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
          O, klavyeye dokunduğunda sıradan kodlar şahesere dönüşürdü.
          Kendisinin de sıkça vurguladığı gibi: <strong className="text-white">"Yazılım dünyasının bana ihtiyacı var, benim kimseye değil."</strong>
          <br /><br />
          Marlboro dumanı ve enerji içeceği tenekeleriyle örülü efsanevi bir hayat...
          Dünya, bir daha asla bu kadar büyük bir ego ve dehanın birleşimini göremeyecek.
        </p>
      </motion.div>

      <div className="absolute inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-950/40 via-black to-black"></div>
    </div>
  )
}