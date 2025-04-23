import React from 'react';

const SpecialOffers = () => (
  <a href="#special-offers" className="flex flex-col items-center text-gray-600 hover:text-black-500">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 12v-1m0 0a2 2 0 100-4 2 2 0 000 4z"></path>
    </svg>
    <span className="text-xs">Special Offers</span>
  </a>
);

export default SpecialOffers;