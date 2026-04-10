import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface CounterProps {
  label: string;
  initialValue: number;
  finalValue: number;
  prefix?: string;
  suffix?: string;
  delay?: number;
  trend?: 'down' | 'up' | 'crash';
  description?: string;
  changeText?: string;
  highlightClass?: string;
}

export default function Counter({ label, initialValue, finalValue, prefix = "", suffix = "", delay = 0, trend = 'down', description, changeText, highlightClass = "text-red-500" }: CounterProps) {
  const [displayValue, setDisplayValue] = useState(initialValue);
  const [hasStarted, setHasStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setHasStarted(true);

      const duration = 4000; // 4 saniyelik daha dramatik sayaç
      const steps = 80;
      const stepTime = Math.abs(Math.floor(duration / steps));

      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        // Quartic ease out etki: başlarda inanılmaz hızlı, sona doğru çok yavaşlar
        const easeProgress = 1 - Math.pow(1 - progress, 5);

        const current = Math.round(initialValue + (finalValue - initialValue) * easeProgress);
        setDisplayValue(current);

        if (currentStep >= steps) {
          clearInterval(interval);
          setDisplayValue(finalValue);
          setIsFinished(true);
        }
      }, stepTime);

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(startTimer);
  }, [delay, initialValue, finalValue]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: delay * 0.2 }}
      className={`bg-zinc-900/80 p-8 rounded-2xl border ${isFinished && trend === 'crash' ? 'border-red-600 shadow-[0_0_40px_rgba(220,38,38,0.25)]' : 'border-zinc-800'} relative overflow-hidden group transition-all duration-700 backdrop-blur-sm`}
    >
      <div className="absolute -top-6 -right-6 p-4 opacity-5 font-black text-9xl select-none group-hover:scale-110 transition-transform duration-500">
        {trend === 'down' || trend === 'crash' ? '↓' : '↑'}
      </div>

      <h3 className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-4 group-hover:text-red-400 transition-colors">{label}</h3>

      <div className="flex flex-col gap-2">
        <div className={`text-5xl md:text-6xl font-mono font-black tracking-tighter ${isFinished && trend === 'crash' ? 'text-red-500' : 'text-white'} transition-colors duration-500`}>
          {prefix}{displayValue.toLocaleString('tr-TR')}{suffix}
        </div>

        <div className="h-10 mt-1">
          {hasStarted && isFinished && changeText && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              className={`text-xl font-black bg-black/60 inline-block px-4 py-1.5 rounded-lg border border-white/10 shadow-xl ${highlightClass}`}
            >
              {changeText}
            </motion.div>
          )}
        </div>
      </div>

      {description && (
        <p className="text-zinc-400 text-sm mt-4 leading-relaxed border-t border-zinc-800/50 pt-5">
          {description}
        </p>
      )}
    </motion.div>
  )
}