import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, AlertTriangle } from 'lucide-react'

export default function ReviveButton() {
  const [clicks, setClicks] = useState(0)
  const [errorMsg, setErrorMsg] = useState('')

  const errors = [
    "HATA 404: Bu kadar büyük bir ego için bulutta yeterli sunucu alanı yok.",
    "Bakiye Yetersiz! Parliament Midnight Blue stoğu global olarak sıfırlandığı için diriltme yapılamaz.",
    "ERİŞİM REDDEDİLDİ: Musab şu an Tanrı'nın evren kodlarını refactor ediyor.",
    "Sistem Çöktü! Nescafe Express Caramel eksikliği nedeniyle dirilme animasyonu yüklenemedi.",
    "Ruh kapasitesi aşıldı! Dünyanın en iyi yazılımcısı bu fani evrene sığamıyor.",
    "UYARI: Geri dönerse, dünyadaki tüm diğer yazılımcıların işsiz kalma riski var."
  ]

  const handleRevive = () => {
    setClicks(prev => prev + 1)
    setErrorMsg(errors[clicks % errors.length])
  }

  return (
    <div className="flex flex-col items-center justify-center my-32">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleRevive}
        className="group relative flex items-center gap-4 bg-zinc-950 border-2 border-red-900 hover:border-red-500 px-10 py-5 rounded-full font-black text-2xl text-white overflow-hidden transition-colors cursor-pointer shadow-[0_0_30px_rgba(153,27,27,0.4)] hover:shadow-[0_0_50px_rgba(239,68,68,0.6)]"
      >
        <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-15 transition-opacity"></div>
        <Zap className="text-red-500 group-hover:text-yellow-400 group-hover:animate-pulse w-8 h-8 transition-colors" />
        <span className="tracking-widest">MUSAB'I DİRİLT</span>
      </motion.button>

      <div className="h-16 mt-8">
        <AnimatePresence mode="wait">
          {errorMsg && (
            <motion.div
              key={errorMsg}
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex items-center gap-3 text-red-500 font-mono bg-black/80 px-6 py-3 rounded-xl border border-red-900/80 shadow-[0_10px_30px_rgba(0,0,0,0.5)] max-w-2xl text-center font-bold"
            >
              <AlertTriangle className="w-6 h-6 flex-shrink-0 animate-pulse" />
              <span>{errorMsg}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}