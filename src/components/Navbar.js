import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FiWatch } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { totalItems } = useCart();

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="w-8 h-8 bg-red-400 rounded-full flex items-center justify-center">
            <FiWatch className="text-white text-xl" />
          </div>
          <span className="ml-2 text-xl font-semibold text-gray-800 hover:text-red-400 transition-colors">
            ShopMad
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link to="/all-products?category=Men" className="hover:text-red-400">Men</Link>
          <Link to="/all-products?category=Women" className="hover:text-red-400">Women</Link>
          <Link to="/all-products?category=Kids" className="hover:text-red-400">Kids</Link>
          <Link to="/contact" className="hover:text-red-600">Contact Us</Link> {/* You can update this later */}
        </nav>

        {/* Cart Icon */}
        <div className="relative">
          <Link to="/cart" className="text-gray-700 hover:text-red-400 relative">
            <FaShoppingCart className="text-2xl" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-400 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
