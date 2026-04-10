import { motion } from 'framer-motion'
import { Skull } from 'lucide-react'

export default function Hero() {
  return (
    <div className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="mb-8"
      >
        <Skull className="w-24 h-24 text-red-500 mx-auto drop-shadow-[0_0_15px_rgba(255,0,0,0.5)]" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-5xl md:text-7xl font-black mb-4 tracking-tighter"
      >
        WHEN <span className="text-red-500">MUSAB</span> DIED
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto"
      >
        Dünya bir daha asla eskisi gibi olmadı. İşte tam olarak o an değişenler...
      </motion.p>

      <div className="absolute inset-0 z-[-1] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black"></div>
    </div>
  )
}