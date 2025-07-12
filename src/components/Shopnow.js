import React from 'react';
import { useNavigate } from 'react-router-dom';

const Shopnow = () => {

  const navigate = useNavigate();

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        
        {/* Left Content */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-4xl mb-6 font-bold text-gray-900">
            Discover Your Perfect Timepiece
            <br className="hidden lg:inline-block" />Style That Defines You
          </h1>
          <p className="mb-8 leading-relaxed text-lg text-gray-700">
            Explore our exclusive collection of premium watches crafted with precision and elegance. Timeless pieces for every moment.
          </p>
          <div className="flex justify-center">
            <button 
            onClick={() => navigate('/all-products')}
            className="inline-flex text-white bg-red-400 border-0 py-2 px-6 focus:outline-none hover:bg-red-800 rounded text-lg transition duration-300">
              Explore
            </button>
          </div>
        </div>

        {/* Right: Image with hover effect */}
        <div className="lg:max-w-xl lg:w-full md:w-1/2 w-5/6 flex justify-center">
          <img
            className="rounded-full object-cover w-96 h-96 shadow-2xl border-4 border-red-300 transform transition duration-500 hover:scale-110 hover:rotate-3"
            alt="watch hero"
            src="https://static.helioswatchstore.com/media/catalog/product/g/1/g1159_1.jpg" // Replace with your watch image
          />
        </div>

      </div>
    </section>
  );
};

export default Shopnow;
