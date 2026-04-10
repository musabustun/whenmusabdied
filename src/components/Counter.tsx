import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface CounterProps {
  label: string;
  initialValue: number;
  finalValue: number;
  prefix?: string;
  suffix?: string;
  delay?: number;
  trend?: 'down' | 'up';
  description?: string;
  changeText?: string;
}

export default function Counter({ label, initialValue, finalValue, prefix = "", suffix = "", delay = 0, trend = 'down', description, changeText }: CounterProps) {
  const [value, setValue] = useState(initialValue);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasStarted(true);
      setValue(finalValue);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay, finalValue]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: delay * 0.5 }}
      className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl select-none group-hover:scale-110 transition-transform duration-500">
        {trend === 'down' ? '↓' : '↑'}
      </div>

      <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">{label}</h3>

      <div className="flex items-end gap-2">
        <span className="text-4xl md:text-5xl font-mono font-bold text-white">
          {prefix}{value.toLocaleString()}{suffix}
        </span>
        {hasStarted && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={`text-lg font-bold mb-1 ${trend === 'down' ? 'text-red-500' : 'text-green-500'}`}
          >
            {changeText || (trend === 'down' ? '-1' : '+∞')}
          </motion.span>
        )}
      </div>

      {description && (
        <p className="text-gray-500 text-sm mt-4">
          {description}
        </p>
      )}
    </motion.div>
  )
}