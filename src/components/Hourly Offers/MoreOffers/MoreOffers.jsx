import React from 'react';
import { Filter } from 'lucide-react';

const offerItems = [
  "🎁", "🎡", "🛍️", "🎯", "🎉",
  "🏆", "🎫", "💎", "🧩", "🚀"
];

const MoreOffers = () => {
  return (
    <div className="bg-white flex flex-col h-full px-4 py-4">
      {/* Title + Filter Icon */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-md font-semibold">More offers from this store</h3>
        <Filter className="w-5 h-5 text-gray-600" />
      </div>

      {/* Offer Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 flex-grow">
        {offerItems.map((item, index) => (
          <div
            key={index}
            className="aspect-square bg-gradient-to-r from-pink-200 via-yellow-200 to-green-200 rounded-xl flex items-center justify-center text-5xl"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreOffers;
