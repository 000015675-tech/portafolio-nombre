
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar'

import Home from './pages/home'
import SobreMi from './pages/sobreMi'
import Proyectos from './pages/proyectos'
import Contacto from './pages/contacto'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  )
}

export default App
