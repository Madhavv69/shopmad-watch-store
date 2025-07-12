import React from 'react';
import { useCart } from '../context/CartContext';
import { FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const { cart, increaseQty, decreaseQty, removeItem, totalItems, totalPrice } = useCart();
  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    toast.info('Directing to Checkout...', { position: 'top-right' });

    // Navigate after a short delay so the toast can be seen
    setTimeout(() => {
      navigate('/checkout');
    }, 1500); // adjust duration if needed
  };

  return (
    <section className="min-h-screen bg-gray-50 p-8">
      <ToastContainer position="top-right" autoClose={2000} />
      <h2 className="text-3xl font-bold text-center mb-8">Your Cart</h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-4 shadow-md rounded-xl"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-500">{item.brand}</p>
                  <div className="flex items-center mt-2 space-x-2">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="bg-gray-200 px-2 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="bg-gray-200 px-2 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-2">
                <span className="text-red-400 font-bold text-lg">
                  ₹{item.price * item.quantity}
                </span>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-400 hover:text-red-700 text-sm flex items-center gap-1"
                >
                  <FaTrash /> Remove
                </button>
              </div>
            </div>
          ))
        )}

        {cart.length > 0 && (
          <div className="flex flex-col items-end gap-3 mt-6">
            <p className="text-lg font-medium text-gray-700">
              Total Items: <span className="font-semibold">{totalItems}</span>
            </p>
            <p className="text-xl font-bold text-gray-800">
              Total Price: ₹{totalPrice}
            </p>

            <button
              onClick={handleCheckoutClick}
              className="mt-3 px-6 py-3 text-white font-semibold rounded-xl shadow transition bg-red-400 hover:bg-red-700"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
