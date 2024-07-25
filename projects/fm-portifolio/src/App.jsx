import { useState } from 'react'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className=" overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased">
        <Navbar />
        <HeroSection />
      </main>
    </>
  )
}

export default App
