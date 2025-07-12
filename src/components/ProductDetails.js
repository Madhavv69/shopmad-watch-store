
// ProductDetails.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
  const { addToCart } = useCart();
  const { id } = useParams();
  const [clicked, setClicked] = useState(false);
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <div className="p-8">Product not found</div>;

  const handleAddToCart = () => {
    addToCart(product);
    toast.success('Product added to cart!');
    setClicked(true);
    setTimeout(() => setClicked(false), 300); // reset animation
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <ToastContainer position="top-right" autoClose={2000} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl bg-white shadow-xl rounded-3xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Left: Circular Watch Image */}
        <div className="flex justify-center items-center">
          <div className="w-[90%] aspect-square bg-gray-100 p-4 rounded-full border-[6px] border-red-200 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full rounded-full hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            {product.name}
          </h1>

          <p className="text-sm text-gray-500 mb-3">
            Brand: <span className="font-semibold">{product.brand}</span>
          </p>

          <div className="flex items-center gap-1 text-yellow-500 text-xl mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>{i < product.rating ? '★' : '☆'}</span>
            ))}
            <span className="ml-2 text-sm text-gray-500">({product.rating})</span>
          </div>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Discover timeless elegance and precise craftsmanship with this stunning watch from {product.brand}. Designed to elevate your look, this watch seamlessly blends classic appeal with modern details.
          </p>

          <div className="mb-6">
            <p className="font-medium text-gray-800 mb-2">Select Size:</p>
            <div className="inline-block px-5 py-2 border-2 border-red-400 text-red-400 font-semibold rounded-full text-sm">
              One Size
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-3xl font-extrabold text-gray-800">₹{product.price}</span>

            <motion.button
              whileTap={{ scale: 0.95 }}
              animate={clicked ? { scale: [1, 0.95, 1.05, 1] } : {}}
              transition={{ duration: 0.4 }}
              onClick={handleAddToCart}
              className="bg-red-400 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-all shadow-md"
            >
              Add to Cart
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProductDetails;
