
import React from 'react';
import { FaShippingFast, FaHeadset, FaCreditCard, FaClock } from 'react-icons/fa';

const features = [
  {
    icon: <FaShippingFast className="text-red-400 w-8 h-8 mb-3" />,
    title: 'Free Shipping',
    description: 'Free shipping on all orders, no hidden fees.',
  },
  {
    icon: <FaClock className="text-red-400 w-8 h-8 mb-3" />,
    title: '10+ Years of Trust',
    description: 'One decade of precision, trust, and legacy.',
  },
  {
    icon: <FaHeadset className="text-red-400 w-8 h-8 mb-3" />,
    title: 'Online Support',
    description: '24 hours a day, 7 days a week.',
  },
  {
    icon: <FaCreditCard className="text-red-400 w-8 h-8 mb-3" />,
    title: 'Flexible Payment',
    description: 'Pay with multiple credit cards easily.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose ShopMad?</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
