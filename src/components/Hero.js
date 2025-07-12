import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const categories = [
    {
      name: 'Men',
      image: 'https://static.helioswatchstore.com/media/catalog/product/g/1/g1160_1.jpg',
      queryParam: 'men',
    },
    {
      name: 'Women',
      image: 'https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1b7e56b5/images/Titan/Catalog/2698QM01_2.jpg?sw=800&sh=800',
      queryParam: 'women',
    },
    {
      name: 'Kids',
      image: 'https://www.kidswatches.co.nz/cdn/shop/products/product-image-1689073731.jpg?v=1703104622',
      queryParam: 'kids',
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Shop by Category
        </h1>
        <div className="flex flex-wrap justify-center gap-10">
          {categories.map((category) => (
            <Link
              to={`/all-products?category=${category.queryParam}`}
              key={category.name}
              className="w-full sm:w-[300px] md:w-[350px] transition transform hover:scale-105 hover:shadow-2xl duration-500"
            >
              <div className="bg-gray-100 p-6 rounded-xl text-center">
                <img
                  className="rounded-xl h-72 w-full object-cover object-center mb-4"
                  src={category.image}
                  alt={category.name}
                />
                <h2 className="text-2xl font-semibold text-gray-800">
                  {category.name}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
