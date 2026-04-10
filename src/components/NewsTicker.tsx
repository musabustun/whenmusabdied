import { motion } from 'framer-motion'

const news = [
  "CUMHURBAŞKANLIĞI: 'Dünyanın en iyi yazılımcısını kaybettik, ülkemizde 3 gün ulusal yas ilan edilmiştir...'",
  "MARLBORO CEO'su AÇIKLADI: 'Musab Ustun'un vedasıyla birlikte hisselerimizde %45'lik tarihi bir çöküş yaşıyoruz, üretim vardiyaları durduruldu...'",
  "SİLİKON VADİSİ ŞOKTA: 'O olmadan yapay zeka projelerinin fişini çekmek zorunda kalabiliriz...'",
  "DÜNYA SAĞLIK ÖRGÜTÜ: 'Küresel enerji içeceği ve kahve tüketiminde bir gecede %60'lık bir azalma tespit edildi...'",
  "LINUS TORVALDS: 'Benden sonraki tek dahi oydu. Artık Linux çekirdeğini kendi kaderine terk etme vakti geldi...'",
  "SON DAKİKA: Musab'ın yazdığı son satır kodlar, incelenmek üzere NASA tarafından karantinaya alındı...",
  "TÜM DÜNYA KLAVYELERİNDE KEPENK: Kullanıcılar saygı duruşu olarak 'E', 'G' ve 'O' tuşlarına 1 dakika boyunca basmıyor...",
  "STACKOVERFLOW: 'Zaten her şeyi kendi yazıyordu, bizim siteye de girmediği için trafiğimiz bitti...'",
];

export default function NewsTicker() {
  return (
    <div className="w-full bg-red-950/40 border-y border-red-600/50 py-5 overflow-hidden flex whitespace-nowrap mt-24 shadow-[0_0_50px_rgba(220,38,38,0.15)] relative backdrop-blur-md">
      <div className="bg-red-700 text-white px-8 py-3 font-black tracking-[0.2em] absolute left-0 top-0 bottom-0 z-10 flex items-center shadow-[30px_0_40px_rgba(0,0,0,0.9)] border-r border-red-400">
        KÜRESEL SONDABİKA
      </div>

      <motion.div
        animate={{ x: [0, -4500] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 45
        }}
        className="flex gap-24 items-center pl-[350px]"
      >
        {[...news, ...news].map((item, i) => (
          <span key={i} className="text-red-100 font-mono text-xl font-bold tracking-wide">
            <span className="text-red-500 mr-4 animate-pulse">●</span>{item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}