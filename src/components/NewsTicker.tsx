import { motion } from 'framer-motion'

const news = [
  "CUMHURBAŞKANLIĞI: 'Dünyanın en iyi yazılımcısını kaybettik, ülkemizde 3 gün ulusal yas ilan edilmiştir...'",
  "PHILIP MORRIS AÇIKLADI: 'Parliament Midnight Blue stokları tarihinde ilk defa üretim fazlası verdi, fabrikaları kapatıyoruz...'",
  "NESTLÉ KRİZDE: 'Nescafe Express Original ve Caramel üretim hatları tek tüketicimizin gidişiyle durduruldu...'",
  "COCA-COLA ŞOKTA: 'Fuse tea Mango ve Şeftali depoları taşıyor, ürünleri denize dökmek için izin bekliyoruz...'",
  "REDBULL: 'Kanatlarımız kırıldı, nadiren de olsa bizi tercih ediyordu...'",
  "SİLİKON VADİSİ ÇÖZÜMSÜZ: 'O olmadan yapay zeka projelerinin fişini çekmek zorunda kalabiliriz...'",
  "LINUS TORVALDS: 'Benden sonraki tek dahi oydu. Artık Linux çekirdeğini kendi kaderine terk etme vakti geldi...'",
  "SON DAKİKA: Musab'ın (5 Ekim 2007 - Sonsuzluk) yazdığı son satır kodlar, incelenmek üzere NASA tarafından karantinaya alındı...",
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