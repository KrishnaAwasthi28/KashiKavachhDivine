import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import { CartProvider } from './context/CartContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CartDrawer from './components/cart/CartDrawer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import Travel from './pages/Travel'
import PackageDetail from './pages/PackageDetail'
import About from './pages/About'
import Heritage from './pages/Heritage'
import Contact from './pages/Contact'
import CategoryPage from './pages/CategoryPage'

export default function App() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-[#07060a] flex flex-col">
          <Navbar onCartOpen={() => setCartOpen(true)} />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:slug" element={<ProductDetail />} />
              <Route path="/travel" element={<Travel />} />
              <Route path="/travel/:slug" element={<PackageDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/heritage" element={<Heritage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/category/:categoryId" element={<CategoryPage />} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}
