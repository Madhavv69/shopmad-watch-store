import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Shopnow from './components/Shopnow';
import NewArrivals from './components/NewArrivals';
import Hero from './components/Hero';
import BrandList from './components/BrandList';
import Stats from './components/stats';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
import AllProducts from './components/AllProducts';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { CartProvider } from './context/CartContext';
import Contact from './components/Contact';


// ✅ Import ToastContainer
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OrderConfirmation from './components/OrderConfirmation';

const Layout = ({ children }) => {
  const location = useLocation();
  const isProductDetailPage = location.pathname.startsWith('/product/');
  const isHomePage = location.pathname === '/';

  return (
    <>
      {!isProductDetailPage && <Navbar />}
      {children}
      {isHomePage && <Footer />}
    </>
  );
};

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        {/* ✅ Toast container added here */}
        <ToastContainer position="top-center" autoClose={2000} />
        <Routes>
          <Route
            path="/"
            element={(
              <>
                <Shopnow />
                <NewArrivals />
                <Hero />
                <BrandList />
                <Stats />
                <Testimonials />
                <WhyChooseUs />
                <Footer />
              </>
            )}
          />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order-confirmation" element={<OrderConfirmation/>} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
