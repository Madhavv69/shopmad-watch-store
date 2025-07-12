
import React from 'react';

const brands = [
  { name: 'Armani Exchange', logo: 'https://www.kamalwatch.com/cdn/shop/files/AX_logo.png?v=1664446291', link: 'https://www.armani.com/' },
  { name: 'Omega', logo: 'https://www.kamalwatch.com/cdn/shop/files/CK_logo.png?v=1664446509', link: 'https://ro.calvinklein.com/mens-watches-jewellery' },
  { name: 'Casio', logo: 'https://www.kamalwatch.com/cdn/shop/files/casio_logo.png?v=1664443248', link: 'https://www.casio.com' },
  { name: 'Fossil', logo: 'https://www.kamalwatch.com/cdn/shop/files/fossil_logo.png?v=1664443417', link: 'https://www.fossil.com' },
  { name: 'Seiko', logo: 'https://www.kamalwatch.com/cdn/shop/files/seiko_logo.png?v=1664376549', link: 'https://www.seikowatches.com' },
  { name: 'Balmain', logo: 'https://www.kamalwatch.com/cdn/shop/files/Balmain_logo_891001e1-a86d-4569-9440-c81b0c53a029.png?v=1674827803', link: 'https://www.balmainwatches.com/en/?srsltid=AfmBOopL9JuvflGZEL7PunLP57vv4hOAozutY9yqGrdc-N-oOwZwzbv4' },
  { name: 'Rado', logo: 'https://www.kamalwatch.com/cdn/shop/files/rado_logo.png?v=1664353230', link: 'https://www.rado.com/en_in/' },
  { name: 'Tissot', logo: 'https://www.kamalwatch.com/cdn/shop/files/tissot_logo.png?v=1664365165', link: 'https://www.tissotwatches.com' },
  { name: 'Citizen', logo: 'https://www.kamalwatch.com/cdn/shop/files/Citizen_logo.png?v=1664442888', link: 'https://www.citizenwatch.com' },
  { name: 'Michael Kors', logo: 'https://www.kamalwatch.com/cdn/shop/files/mk_logo_8bfe8b5d-d810-460d-8692-38d95f2cba5b.png?v=1664443108', link: 'https://www.michaelkors.com' },
];

const BrandList = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-5">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
        Our Trusted Brands
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {brands.map((brand) => (
          <a
            key={brand.name}
            href={brand.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center transition-transform duration-300 hover:scale-105"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="max-h-16 w-auto"
            />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default BrandList;
