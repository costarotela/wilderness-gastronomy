import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Locations from './pages/Locations'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </main>
    </div>
  )
}
