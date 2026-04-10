import Hero from './components/Hero'
import Counter from './components/Counter'
import NewsTicker from './components/NewsTicker'
import ReviveButton from './components/ReviveButton'

function App() {
  return (
    <main className="min-h-screen bg-[#050505] pb-10 selection:bg-red-900 selection:text-white">
      <Hero />

      <div className="max-w-7xl mx-auto px-4 mt-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-black text-white px-8 inline-block border-b-4 border-red-800 pb-4 uppercase tracking-[0.2em]">
            Küresel Yıkım Raporu
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Counter
            label="Parliament Midnight Blue Hisseleri"
            initialValue={350000000000}
            finalValue={12}
            delay={1}
            trend="crash"
            prefix="$"
            changeText="ÜRETİM DURDURULDU 📉"
            description="Musab'ın kesintisiz desteği son buldu. Philip Morris, Parliament Midnight Blue serisini sonsuza dek rafa kaldırdığını duyurdu."
          />

          <Counter
            label="Nescafe Express Original & Caramel Pazar Payı"
            initialValue={100}
            finalValue={3}
            delay={1.5}
            trend="crash"
            suffix="%"
            changeText="KÜRESEL KAOS ☕"
            description="Soğuk kahve endüstrisi tek müşteriyle ayakta kalıyormuş. Teneke kahve fabrikaları kepenk indirdi."
          />

          <Counter
            label="Fuse tea (Mango & Şeftali) Stokları"
            initialValue={8900000}
            finalValue={14589000000}
            delay={2}
            trend="up"
            changeText="STOK FAZLASI 🧊"
            highlightClass="text-yellow-500"
            description="Tüketim aniden durunca depolarda yer kalmadı. Hükümetler okyanuslara Fuse tea dökmek için acil toplanıyor."
          />

          {/* Ego Quote Card */}
          <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-2xl border border-zinc-800 flex flex-col justify-center items-center text-center shadow-[0_0_40px_rgba(0,0,0,0.5)] transform hover:scale-[1.02] transition-transform duration-500 hover:border-red-900/50">
            <h3 className="text-zinc-600 font-bold tracking-[0.2em] uppercase mb-6 text-sm">Altın Kural #1</h3>
            <p className="text-red-50 font-serif italic text-2xl leading-snug">
              "Benim yazdığım kodda bug olmaz, <br/>
              sadece henüz sisteminizin kaldıramadığı <br/>
              <span className="text-red-500 font-bold">mükemmel özellikler</span> vardır."
            </p>
            <div className="mt-8 pt-6 border-t border-zinc-800 w-full">
              <p className="text-red-700 font-black tracking-widest">— MUSAB USTUN (5 EKİ 2007 - ∞)</p>
            </div>
          </div>

          <Counter
            label="Silikon Vadisi Özgüven İndeksi"
            initialValue={100}
            finalValue={0}
            delay={2.5}
            trend="crash"
            suffix="%"
            changeText="TAMAMEN SIFIRLANDI 💀"
            description="Dünyadaki tüm yazılımcı egosunun %90'ını tek başına sırtlayan Musab gidince, sektör sadece dökümantasyon okuyanlara kaldı."
          />

          <Counter
            label="Çözülemeyen Proje Bug'ları"
            initialValue={14205}
            finalValue={89547362}
            delay={3}
            trend="up"
            changeText="+ YAZILIM ÇÖKTÜ 💥"
            highlightClass="text-yellow-500"
            description="O, kod yazmayı bırakınca GitHub sunucuları çıldırdı. Herkesin kodu aynı anda patladı, düzeltilemiyor."
          />

          <Counter
            label="Küresel Redbull Rezervi (Nadiren İçilirdi)"
            initialValue={0}
            finalValue={404}
            delay={3.5}
            trend="crash"
            changeText="BULUNAMADI 🪫"
            description="Çok sevmezdi ama içtiğinde Redbull içerdi. O gidince Redbull'un kanatları kırıldı."
          />
        </div>
      </div>

      <NewsTicker />
      <ReviveButton />
    </main>
  )
}

export default App