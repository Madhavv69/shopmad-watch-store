
// Checkout.jsx
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
  const { cart, clearCart } = useCart();

  const navigate = useNavigate();
  
  const [form, setForm] = useState({
    email: '', firstName: '', lastName: '', address: '', apt: '', city: '', state: '', postalCode: '', phone: '', paymentMethod: 'card', cardNumber: '', cardName: '', expiry: '', cvc: '', delivery: 'standard'
  });

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingCost = form.delivery === 'express' ? 150 : 50;
  const codFee = form.paymentMethod === 'cod' ? 20 : 0;
  const taxes = +(subtotal * 0.08).toFixed(2);
  const total = subtotal + shippingCost + taxes + codFee;

  const handleSubmit = () => {
  // List of required fields
  const requiredFields = ['email', 'firstName', 'lastName', 'address', 'city', 'state', 'postalCode', 'phone'];

  // If payment method is card, include card-related fields too
  if (form.paymentMethod === 'card') {
    requiredFields.push('cardNumber', 'cardName', 'expiry', 'cvc');
  }

  // Check for any empty required fields
  const emptyField = requiredFields.find(field => !form[field].trim());

  if (emptyField) {
    toast.warn('Please fill out all required fields.', { position: 'top-right' });
    return;
  }

  // If all good, proceed
  toast.success('Order placed successfully!', { position: 'top-right' });
  clearCart();
  setTimeout(() => navigate('/order-confirmation'), 2000);
  };




  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6">
      <ToastContainer position="top-right" autoClose={2000} />
      <h2 className="text-3xl font-bold mb-8 text-center">Checkout</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Left: Forms */}
        <div className="lg:col-span-2 space-y-10">
          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
            <input type="email" placeholder="Email address" className="w-full h-12 text-base p-3 border rounded-lg" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          </div>

          {/* Shipping */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Shipping Information</h3>
            <div className="grid grid-cols-2 gap-4 mb-2">
              <input type="text" placeholder="First name" className="h-12 text-base p-3 border rounded-lg" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
              <input type="text" placeholder="Last name" className="h-12 text-base p-3 border rounded-lg" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
              <input type="text" placeholder="Address" className="w-full h-12 text-base p-3 border rounded-lg mb-2" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
              <input type="text" placeholder="Apartment, suite, etc." className="w-full h-12 text-base p-3 border rounded-lg mb-2" value={form.apt} onChange={(e) => setForm({ ...form, apt: e.target.value })} />
              <input type="text" placeholder="City" className="w-full h-12 text-base p-3 border rounded-lg mb-2" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
              <input type="text" placeholder="State / Province" className="h-12 text-base p-3 border rounded-lg" value={form.state} onChange={(e) => setForm({ ...form, state: e.target.value })} />
              <input type="text" placeholder="Postal code" className="h-12 text-base p-3 border rounded-lg" value={form.postalCode} onChange={(e) => setForm({ ...form, postalCode: e.target.value })} />
              <input type="text" placeholder="Phone" className="w-full h-12 text-base p-3 border rounded-lg" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            </div>
          </div>

          {/* Delivery */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Delivery Method</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="radio" name="delivery" value="standard" checked={form.delivery === 'standard'} onChange={() => setForm({ ...form, delivery: 'standard' })} />
                Standard (4–10 business days) - ₹50.00
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="delivery" value="express" checked={form.delivery === 'express'} onChange={() => setForm({ ...form, delivery: 'express' })} />
                Express (2 business days) - ₹150.00
              </label>
            </div>
          </div>

          {/* Payment */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Payment</h3>
            <div className="space-y-4">
              <label className="flex gap-2 items-center">
                <input type="radio" name="paymentMethod" value="card" checked={form.paymentMethod === 'card'} onChange={() => setForm({ ...form, paymentMethod: 'card' })} />
                Credit/Debit Card
              </label>
              <label className="flex gap-2 items-center">
                <input type="radio" name="paymentMethod" value="cod" checked={form.paymentMethod === 'cod'} onChange={() => setForm({ ...form, paymentMethod: 'cod' })} />
                Cash on Delivery (₹20.00 extra)
              </label>
            </div>
            {form.paymentMethod === 'card' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <input type="text" placeholder="Card number" className="h-12 text-base p-3 border rounded-lg" value={form.cardNumber} onChange={(e) => setForm({ ...form, cardNumber: e.target.value })} />
                <input type="text" placeholder="Name on card" className="h-12 text-base p-3 border rounded-lg" value={form.cardName} onChange={(e) => setForm({ ...form, cardName: e.target.value })} />
                <input type="text" placeholder="Expiry (MM/YY)" className="h-12 text-base p-3 border rounded-lg" value={form.expiry} onChange={(e) => setForm({ ...form, expiry: e.target.value })} />
                <input type="text" placeholder="CVC" className="h-12 text-base p-3 border rounded-lg" value={form.cvc} onChange={(e) => setForm({ ...form, cvc: e.target.value })} />
              </div>
            )}
          </div>
        </div>

        {/* Right: Order Summary */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h4 className="text-xl font-semibold mb-4">Order Summary</h4>
          <div className="space-y-4 mb-4">
            {cart.map((item, i) => (
              <div key={i} className="flex justify-between items-start gap-4">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.brand}</p>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                </div>
                <p className="font-semibold text-red-500">₹{item.price * item.quantity}</p>
              </div>
            ))}
          </div>

          <div className="border-t pt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>₹{shippingCost}</span>
            </div>
            {form.paymentMethod === 'cod' && (
              <div className="flex justify-between">
                <span>COD Fee</span>
                <span>₹{codFee}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Taxes</span>
              <span>₹{taxes}</span>
            </div>
            <div className="flex justify-between font-bold text-base border-t pt-2">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <button
                onClick={handleSubmit}
                className="mt-6 w-full bg-red-400 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-all transform active:scale-95 shadow-md hover:shadow-lg"
              >
                Confirm Order
              </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
