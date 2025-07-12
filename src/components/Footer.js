
import React from 'react';
import { FaGithub, FaTwitter, FaEnvelope, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font border-t border-gray-300 relative z-10 bg-white">
      {/* Gradient top border */}
      <div className="h-1 w-full bg-gradient-to-r from-red-400 via-purple-500 to-pink-500 mb-10"></div>

      <div className="container px-5 pb-12 mx-auto flex md:items-start lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        {/* Logo & motto */}
        <div className="w-64 flex-shrink-0 mx-auto text-center md:text-left mb-10 md:mb-0">
          <h2 className="text-2xl font-extrabold text-gray-900">ShopMad</h2>
          <p className="mt-2 text-sm text-gray-600 italic">Where time meets elegance.</p>

          {/* Newsletter */}
          <form className="mt-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 text-sm rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <button
              type="submit"
              className="mt-2 w-full bg-red-400 text-white py-2 rounded hover:bg-red-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Links */}
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          {/* Categories */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h3 className="title-font font-semibold text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h3>
            <nav className="list-none space-y-2">
              <li><a href="/all-products?category=Men" className="hover:text-red-400">Men</a></li>
              <li><a href="/all-products?category=Women" className="hover:text-red-400">Women</a></li>
              <li><a href="/all-products?category=Kids" className="hover:text-red-400">Kids</a></li>
              <li><a href="/contact" className="hover:text-red-400">Contact Us</a></li>
            </nav>
          </div>

          {/* Help */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h3 className="title-font font-semibold text-gray-900 tracking-widest text-sm mb-3">SUPPORT</h3>
            <nav className="list-none space-y-2">
              <li><a href="#" className="hover:text-red-400">Shipping Info</a></li>
              <li><a href="#" className="hover:text-red-400">Returns</a></li>
              <li><a href="#" className="hover:text-red-400">Help Center</a></li>
              <li><a href="#" className="hover:text-red-400">Track Order</a></li>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="bg-gray-100">
        <div className="container px-5 py-4 mx-auto flex flex-wrap items-center justify-between">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ShopMad — Crafted with ❤️ in India
          </p>

          {/* Social icons */}
          <span className="inline-flex gap-4">
            
            <a href="https://www.linkedin.com/in/madhavv69/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-400 transition transform hover:-translate-y-1">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/Madhavv69" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-400 transition transform hover:-translate-y-1">
              <FaGithub />
            </a>
            <a href="mailto:narendramadhavv1616@gmail.com" className="text-gray-500 hover:text-red-400 transition transform hover:-translate-y-1">
              <FaEnvelope />
            </a>
            <a href="https://x.com/NarendraM64887" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-400 transition transform hover:-translate-y-1">
              <FaTwitter />
            </a>
            
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
