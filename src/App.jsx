import Navbar from './components/Navbar'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        {/* Placeholder content for scroll testing */}
        <div style={{ height: '200vh', paddingTop: '100px' }}>
          <h1>Altesa Hotel</h1>
          <p>Scroll to see navbar transition...</p>
        </div>
      </main>
    </div>
  )
}

export default App
