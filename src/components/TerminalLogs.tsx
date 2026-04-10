import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Terminal, X, Minus, Square } from 'lucide-react'

const logs = [
  "[14:02:03] > npm uninstall anxiety",
  "[14:02:05] Uninstalling... [OK]",
  "[14:15:12] > git commit -m 'Fixed the universe, brb'",
  "[14:15:15] [main 4f8a9d2] Fixed the universe, brb",
  "[14:15:15] 1 file changed, 1 insertion(+), 8 billion deletions(-)",
  "[14:20:00] > git push origin god-mode",
  "[14:20:02] Enumerating objects: 1, done.",
  "[14:20:04] Writing objects: 100% (1/1), 9.2 EB | 14.5 GB/s, done.",
  "[14:25:33] > sudo rm -rf /problems",
  "[14:25:35] Warning: You are about to delete all human problems. Continue? (y/n) y",
  "[14:30:11] > logout",
  "[14:30:11] Process completed. Connection to Musab closed.",
  "_",
]

export default function TerminalLogs() {
  const [displayedLogs, setDisplayedLogs] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < logs.length) {
      const timer = setTimeout(() => {
        setDisplayedLogs(prev => [...prev, logs[currentIndex]])
        setCurrentIndex(prev => prev + 1)
      }, currentIndex === logs.length - 1 ? 800 : Math.random() * 800 + 200)
      return () => clearTimeout(timer)
    }
  }, [currentIndex])

  return (
    <div className="max-w-4xl mx-auto px-4 mt-32 relative z-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-white px-8 inline-block border-b-4 border-red-800 pb-4 uppercase tracking-[0.2em]">
          Son Terminal Kayıtları
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-xl overflow-hidden border border-zinc-800 shadow-[0_0_50px_rgba(0,0,0,0.8)] bg-black"
      >
        {/* Terminal Header */}
        <div className="bg-zinc-900 border-b border-zinc-800 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-zinc-400" />
            <span className="text-zinc-400 font-mono text-sm">musab@god-mode:~</span>
          </div>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-zinc-700 flex items-center justify-center hover:bg-red-500 transition-colors cursor-pointer"><Minus className="w-2 h-2 text-zinc-900 opacity-0 hover:opacity-100" /></div>
            <div className="w-3 h-3 rounded-full bg-zinc-700 flex items-center justify-center hover:bg-yellow-500 transition-colors cursor-pointer"><Square className="w-2 h-2 text-zinc-900 opacity-0 hover:opacity-100" /></div>
            <div className="w-3 h-3 rounded-full bg-zinc-700 flex items-center justify-center hover:bg-green-500 transition-colors cursor-pointer"><X className="w-2 h-2 text-zinc-900 opacity-0 hover:opacity-100" /></div>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 font-mono text-sm md:text-base leading-relaxed bg-[#0a0a0a] min-h-[350px]">
          {displayedLogs.map((log, i) => (
            <div
              key={i}
              className={`
                ${log.includes('>') ? 'text-green-400 font-bold mt-2' : ''}
                ${log.includes('Warning') ? 'text-yellow-400' : ''}
                ${log.includes('closed') ? 'text-red-500 font-bold' : ''}
                ${!log.includes('>') && !log.includes('Warning') && !log.includes('closed') ? 'text-zinc-300' : ''}
                ${log === '_' ? 'animate-pulse text-zinc-500 block h-6' : ''}
              `}
            >
              {log}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}