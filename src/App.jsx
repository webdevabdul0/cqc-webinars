import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Modal from './components/Modal'

import WebinarsPage from './pages/WebinarsPage'
import ServicesPage from './pages/ServicesPage'
import SectorsPage from './pages/SectorsPage'
import PricesPage from './pages/PricesPage'
import AffiliationPage from './pages/AffiliationPage'
import VirtualDemoPage from './pages/VirtualDemoPage'

export default function App() {
  const [modalLabel, setModalLabel] = useState(null)

  return (
    <BrowserRouter>
      <Nav onRegister={setModalLabel} />
      <Routes>
        <Route path="/" element={<WebinarsPage onRegister={setModalLabel} />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/sectors" element={<SectorsPage />} />
        <Route path="/prices" element={<PricesPage />} />
        <Route path="/resources/affiliation" element={<AffiliationPage />} />
        <Route path="/resources/demo" element={<VirtualDemoPage />} />
        <Route path="/resources/webinars" element={<WebinarsPage onRegister={setModalLabel} />} />
      </Routes>
      <Footer />
      {modalLabel !== null && (
        <Modal webinarLabel={modalLabel} onClose={() => setModalLabel(null)} />
      )}
    </BrowserRouter>
  )
}
