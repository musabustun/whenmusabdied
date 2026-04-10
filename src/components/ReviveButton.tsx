import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, AlertTriangle } from 'lucide-react'

export default function ReviveButton() {
  const [clicks, setClicks] = useState(0)
  const [errorMsg, setErrorMsg] = useState('')

  const errors = [
    "Error 404: Soul not found.",
    "Yetersiz Bakiye. Lütfen ruh kredisi yükleyin.",
    "Sunucu yanıt vermiyor. Dualarınız iletilmedi.",
    "Bakiye yetersiz! Lütfen daha fazla kahve dökün.",
    "Sistem Çöktü! Musab çoktan uyku moduna geçti."
  ]

  const handleRevive = () => {
    setClicks(prev => prev + 1)
    setErrorMsg(errors[clicks % errors.length])
  }

  return (
    <div className="flex flex-col items-center justify-center my-24">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleRevive}
        className="group relative flex items-center gap-3 bg-zinc-900 border border-red-900/50 hover:border-red-500 px-8 py-4 rounded-full font-bold text-xl text-white overflow-hidden transition-colors cursor-pointer"
      >
        <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
        <Zap className="text-red-500 group-hover:animate-pulse" />
        MUSAB'I DİRİLT
      </motion.button>

      <div className="h-12 mt-6">
        <AnimatePresence mode="wait">
          {errorMsg && (
            <motion.div
              key={errorMsg}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="flex items-center gap-2 text-red-400 font-mono bg-red-950/30 px-4 py-2 rounded-lg border border-red-900/50"
            >
              <AlertTriangle size={16} />
              {errorMsg}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}