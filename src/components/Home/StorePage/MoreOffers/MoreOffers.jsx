import React from "react";
import { Heart, ChevronsUp, ChevronsDown } from "lucide-react";

const OfferCard = ({ imageSrc, storeName, distance, discount, category, validUntil }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-[180px] mx-auto">
      <img
        src={imageSrc}
        alt={storeName}
        className="w-full h-36 object-cover"
        onError={(e) => (e.target.src = "https://via.placeholder.com/180x144?text=Image+Error")}
      />
      <div className="p-3">
        <div className="flex items-center justify-between">
          <p className="text-gray-600 text-xs">
            {storeName} ({distance})
          </p>
          <Heart className="w-4 h-4 text-gray-400 cursor-pointer hover:text-red-500" />
        </div>
        <h3 className="text-lg font-bold text-blue-900 mt-1">{discount}</h3>
        <div className="flex items-center mt-1">
          <span className="inline-flex items-center px-1.5 py-0.5 bg-gray-200 text-gray-700 text-xs font-medium rounded-full">
            {category}
          </span>
        </div>
        <p className="text-gray-500 text-xs mt-1">Valid till {validUntil}</p>
      </div>
    </div>
  );
};

const MoreOffers = () => {
  const offers = [
    {
      imageSrc: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=180&h=144&q=80", // Clothing
      storeName: "Clothing Store",
      distance: "2km",
      discount: "Get 20% OFF your total bill!",
      category: "Fashion",
      validUntil: "April 30",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1600585152220-904242b5855e?ixlib=rb-4.0.3&auto=format&fit=crop&w=180&h=144&q=80", // Grocery food
      storeName: "Grocery Store",
      distance: "1.5km",
      discount: "Buy 1 Get 1 Free on select items!",
      category: "Food",
      validUntil: "April 28",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1600585154526-990d4371d661?ixlib=rb-4.0.3&auto=format&fit=crop&w=180&h=144&q=80", // Shoes
      storeName: "Shoes Store",
      distance: "3km",
      discount: "30% OFF all footwear!",
      category: "Fashion",
      validUntil: "May 5",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1600585152280-42b61bb7bdfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=180&h=144&q=80", // Garage/Car
      storeName: "Garage Service",
      distance: "2.5km",
      discount: "Free oil change with service!",
      category: "Automotive",
      validUntil: "April 29",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=180&h=144&q=80", // Electronics
      storeName: "Tech Shop",
      distance: "1km",
      discount: "10% OFF electronics!",
      category: "Tech",
      validUntil: "May 1",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1600585152220-904242b5855e?ixlib=rb-4.0.3&auto=format&fit=crop&w=180&h=144&q=80", // Cafe food
      storeName: "Cafe Delight",
      distance: "2km",
      discount: "Free coffee with purchase!",
      category: "Food",
      validUntil: "April 27",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1600585154526-990d4371d661?ixlib=rb-4.0.3&auto=format&fit=crop&w=180&h=144&q=80", // Books
      storeName: "Book Haven",
      distance: "1.8km",
      discount: "20% OFF all books!",
      category: "Books",
      validUntil: "May 3",
    },
  ];

  return (
    <div className="bg-gray-50 p-3 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-bold text-gray-900">Latest Offers Nearby</h2>
        <div className="flex space-x-2">
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <ChevronsUp className="w-6 h-6" />
          </button>
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <ChevronsDown className="w-6 h-6" />
          </button>
        </div>
      </div>
      {/* Grid for offers */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-5 lg:gap-5">
        {offers.map((offer, index) => (
          <OfferCard
            key={index}
            imageSrc={offer.imageSrc}
            storeName={offer.storeName}
            distance={offer.distance}
            discount={offer.discount}
            category={offer.category}
            validUntil={offer.validUntil}
          />
        ))}
      </div>
    </div>
  );
};

export default MoreOffers;