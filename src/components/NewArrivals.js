import React from 'react';
import { Link } from 'react-router-dom';

const newWatches = [
  {
    id: 18,
    name: "Fossil Gen6 Digital",
    image: "https://cdn.glitch.global/eff3b30b-1b34-4c46-ab9a-9a5e18d31982/51u3-CrLPIL._SX679_.jpg?v=1718800196227",
    price: "₹27,899",
  },
  {
    id: 5,
    name: "Titan Raga 925KD0F",
    image: "//img.tatacliq.com/images/i19//437Wx649H/MP000000023503641_437Wx649H_202409010537421.jpeg",
    price: "₹12,995",
  },
  {
    id: 4,
    name: "Casio G-Shock",
    image: "//img.tatacliq.com/images/i16//437Wx649H/MP000000014042844_437Wx649H_202403191603041.jpeg",
    price: "₹11,995",
  },
];

const NewArrivals = () => {
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          New Arrivals
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {newWatches.map((watch) => (
            <Link
              to={`/product/${watch.id}`}  // 👈 Redirect to ProductDetails
              key={watch.id}
              className="bg-white rounded-xl p-4 w-full sm:w-72 md:w-80 shadow-md hover:shadow-xl transition duration-500 transform hover:scale-105"
            >
              <img
                src={watch.image}
                alt={watch.name}
                className="rounded-xl h-72 w-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{watch.name}</h3>
              <p className="text-red-400 font-bold text-lg">{watch.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
