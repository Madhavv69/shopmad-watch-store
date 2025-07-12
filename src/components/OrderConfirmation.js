// OrderConfirmation.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OrderConfirmation = () => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    toast.success('Redirecting to Home...', { position: 'top-right' });
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
      <ToastContainer position="top-center" autoClose={2000} />

      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-lg text-center">
        <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Thank You for Your Order!</h1>
        <p className="text-gray-600 mb-6">
          Your order has been placed successfully. You will receive a confirmation email shortly.
        </p>

        <div className="mb-6">
          <p className="text-sm text-gray-500">
            Order ID: <span className="font-semibold text-gray-800">#{Math.floor(Math.random() * 1000000)}</span>
          </p>
          <p className="text-sm text-gray-500">
            Estimated Delivery: <span className="text-gray-800">4–7 business days</span>
          </p>
        </div>

        <button
          onClick={handleContinueShopping}
          className="inline-block px-6 py-2 bg-red-400 text-white rounded-lg hover:bg-red-700 transition-all"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
