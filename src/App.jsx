import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';

function App() {
  return (
    <ShopProvider>
      <Router>
        <div className="app-container">
          <Header />
          <main className="main-content" style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ShopProvider>
  );
}

export default App;
