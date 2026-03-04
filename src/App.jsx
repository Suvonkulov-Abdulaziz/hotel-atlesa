import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import Rooms from './components/Rooms'
import VideoSection from './components/VideoSection'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <Rooms />
        <VideoSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App
