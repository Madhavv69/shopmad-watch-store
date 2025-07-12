
// AllProducts.jsx
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';

const AllProducts = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({ category: [], brand: [], color: [], rating: [] });
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    const category = searchParams.getAll('category');
    const brand = searchParams.getAll('brand');
    const color = searchParams.getAll('color');
    const rating = searchParams.getAll('rating');
    const sort = searchParams.get('sort') || '';
    setFilters({ category, brand, color, rating });
    setSortOption(sort);
  }, [searchParams]);

  const handleFilterChange = (filterType, value) => {
    const currentValues = filters[filterType];
    const updated = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value];

    const newParams = new URLSearchParams(searchParams);
    newParams.delete(filterType);
    updated.forEach((val) => newParams.append(filterType, val));
    setSearchParams(newParams);
  };

  const handleSortChange = (e) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('sort', e.target.value);
    setSearchParams(newParams);
  };

  const applyFilters = () => {
  let filtered = [...products];

  if (filters.category.length) {
    filtered = filtered.filter((p) =>
      filters.category.some(
        (cat) => cat.toLowerCase() === p.category.toLowerCase()
      )
    );
  }

  if (filters.brand.length) {
    filtered = filtered.filter((p) =>
      filters.brand.some(
        (b) => b.toLowerCase() === p.brand.toLowerCase()
      )
    );
  }

  if (filters.color.length) {
    filtered = filtered.filter((p) =>
      filters.color.some(
        (c) => c.toLowerCase() === p.color.toLowerCase()
      )
    );
  }

  if (filters.rating.length) {
    filtered = filtered.filter((p) =>
      filters.rating.includes(String(p.rating))
    );
  }

  if (sortOption === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  if (sortOption === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  if (sortOption === 'rating-desc') filtered.sort((a, b) => b.rating - a.rating);

  return filtered;
};


  const filteredProducts = applyFilters();

  const FilterBox = ({ title, options, filterType }) => (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {options.map((opt) => (
        <label key={opt} className="block text-sm text-gray-700">
          <input
            type="checkbox"
            checked={filters[filterType].includes(opt)}
            onChange={() => handleFilterChange(filterType, opt)}
            className="mr-2"
          />
          {opt}
        </label>
      ))}
    </div>
  );

  return (
    <section className="flex min-h-screen px-6 py-16 gap-10">
      <motion.aside
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-64 p-6 rounded-2xl shadow-xl bg-white border border-gray-200"
      >
        <FilterBox title="Category" options={["Men", "Women", "Kids"]} filterType="category" />
        <FilterBox title="Brand" options={["Titan", "Fossil", "Rolex", "Casio"]} filterType="brand" />
        <FilterBox title="Color" options={["Black", "Silver", "Brown"]} filterType="color" />
        <FilterBox title="Rating" options={["5", "4", "3"]} filterType="rating" />
      </motion.aside>

      <div className="flex-1">
        <div className="flex justify-end mb-6">
          <select
            value={sortOption}
            onChange={handleSortChange}
            className="p-2 border rounded-md"
          >
            <option value="">Sort by</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating-desc">Rating: High to Low</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
           {filteredProducts.map((product) => (
  <motion.div
    key={product.id}
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{
      scale: 1.15,
      zIndex: 10,
      boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.3)',
    }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className="relative bg-white rounded-3xl overflow-hidden shadow-md transition-transform duration-300 cursor-pointer"
    onClick={() => window.location.href = `/product/${product.id}`}
  >
    <div className="overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
      />
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-gray-800 text-lg mb-1">{product.name}</h3>
      <p className="text-sm text-gray-500 mb-1">{product.category}</p>
      <div className="flex items-center gap-1 text-yellow-500 text-sm mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>{i < product.rating ? '★' : '☆'}</span>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <span className="font-bold text-red-500">₹{product.price}</span>
        <button className="text-white bg-red-300 px-3 py-1 text-sm rounded-full hover:bg-red-500">
          Add to Cart
        </button>
      </div>
    </div>
  </motion.div>
))}


        </div>
      </div>
    </section>
  );
};

export default AllProducts;