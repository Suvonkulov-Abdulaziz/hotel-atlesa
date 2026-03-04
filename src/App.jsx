import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
      </main>
    </div>
  )
}

export default App
