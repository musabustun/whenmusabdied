import Hero from './components/Hero'
import Counter from './components/Counter'
import NewsTicker from './components/NewsTicker'
import ReviveButton from './components/ReviveButton'

function App() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />

      <div className="max-w-6xl mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Counter
            label="Dünya Nüfusu"
            initialValue={8118000000}
            finalValue={8117999999}
            delay={2}
            trend="down"
            description="Küresel insan populasyonunda anlık düşüş."
          />

          <Counter
            label="Çözülemeyen Kod Bugları"
            initialValue={14205}
            finalValue={999999}
            delay={3}
            trend="up"
            changeText="+Sonsuz"
            prefix=">"
            description="Musab gittikten sonra patlayan projeler..."
          />

          <Counter
            label="Küresel Kahve Tüketimi"
            initialValue={100}
            finalValue={85}
            delay={4}
            trend="down"
            suffix="%"
            changeText="-15%"
            description="Starbucks hisselerinde ani düşüş yaşandı."
          />
        </div>
      </div>

      <NewsTicker />
      <ReviveButton />
    </main>
  )
}

export default App
