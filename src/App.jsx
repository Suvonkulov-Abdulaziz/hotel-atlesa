import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import Rooms from './components/Rooms'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <Rooms />
      </main>
    </div>
  )
}

export default App
