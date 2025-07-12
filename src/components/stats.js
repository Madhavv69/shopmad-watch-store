import React from 'react';
import CountUp from 'react-countup';

const stats = [
  { label: 'Users', value: 2700 },
  { label: 'Subscribes', value: 1800 },
  { label: 'Downloads', value: 35 },
  { label: 'Products', value: 4 },
];

const Stats = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 text-center justify-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-4 sm:w-1/4 w-1/2 transition-transform duration-300 hover:scale-105"
            >
              <h2 className="title-font font-bold sm:text-4xl text-3xl text-gray-900">
                <CountUp end={stat.value} duration={2} separator="," />
              </h2>
              <p className="leading-relaxed text-gray-700 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
