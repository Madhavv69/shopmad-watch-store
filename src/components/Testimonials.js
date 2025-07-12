
import React from 'react';
import Slider from 'react-slick';

const testimonials = [
  {
    name: "Holden Caulfield",
    role: "UI Developer",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    quote:
      "This is the best watch store I've seen. I bought my Fossil here, and it's been amazing. Fast delivery too!",
  },
  {
    name: "Alper Kamu",
    role: "Designer",
    image: "https://randomuser.me/api/portraits/women/43.jpg",
    quote:
      "Absolutely love the minimalist UI and product range. Smooth checkout experience!",
  },
  {
    name: "Sara Thomas",
    role: "Fashion Blogger",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "Got my Fossil watch last week — it's gorgeous! Love the packaging too. Will recommend to friends!",
  },
  {
    name: "Ravi Kumar",
    role: "Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "The product page was detailed, and I appreciated the quick shipping updates. Smooth experience overall.",
  },
  {
    name: "Nina Dsouza",
    role: "Student",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    quote:
      "Got a Casio for college — budget friendly and arrived within 3 days. Loved it!",
  },
  {
    name: "Jason Roy",
    role: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    quote:
      "Very professional site. Good range of luxury watches. Customer care was responsive.",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h2 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
          Testimonials
        </h2>
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="p-4">
              <div className="h-full bg-gray-100 p-8 rounded shadow hover:shadow-xl transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="..."></path>
                </svg>
                <p className="leading-relaxed mb-6">{item.quote}</p>
                <div className="inline-flex items-center">
                  <img
                    alt={item.name}
                    src={item.image}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">{item.name}</span>
                    <span className="text-gray-500 text-sm">{item.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
