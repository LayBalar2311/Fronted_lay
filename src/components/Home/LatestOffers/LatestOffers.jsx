import React from "react";
import { Heart, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OfferCard = ({ imageSrc, storeName, distance, discount, category, validUntil, happyHours }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden w-full">
      <div className="relative">
        <img
          src={imageSrc}
          alt={storeName}
          className="w-full aspect-square object-cover"
          onError={(e) => (e.target.src = "https://via.placeholder.com/180x180?text=Image+Error")}
        />
        <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
          <Heart className="w-5 h-5 text-gray-400 hover:text-blue-500" />
        </button>
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between">
          <p className="text-gray-700 text-sm font-medium">
            {storeName} <span className="text-gray-500">({distance})</span>
          </p>
        </div>
        <h3 className="text-lg font-bold text-gray-800 mt-1">{discount}</h3>
        <p className="text-gray-500 text-xs">your total bill on your next visit!</p>
        
        <div className="flex items-center mt-3 space-x-2">
          <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center">
            <span className="text-xs">😀</span>
          </div>
          <span className="text-sm text-gray-600">{category}</span>
        </div>
        
        {happyHours && (
          <p className="text-gray-700 text-sm mt-2">Happy Hours {happyHours}</p>
        )}
        
        {validUntil && (
          <p className="text-gray-600 text-sm mt-2">Valid till <span className="font-medium">{validUntil}</span></p>
        )}
      </div>
    </div>
  );
};

const LatestOffers = () => {
  const navigate = useNavigate();

  const offers = [
    {
      imageSrc: "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&auto=format&fit=crop&w=180&h=180&q=80",
      storeName: "Name of store",
      distance: "2km",
      discount: "Get 20% OFF",
      category: "Category",
      validUntil: "April 30",
      happyHours: "2 - 4 pm"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=180&h=180&q=80",
      storeName: "Name of store",
      distance: "2km",
      discount: "Spin to Win",
      category: "Category",
      validUntil: "April 30",
      description: "Win exciting offers!"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=180&h=180&q=80",
      storeName: "Shoes Store",
      distance: "3km",
      discount: "30% OFF",
      category: "Fashion",
      validUntil: "May 5",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-4.0.3&auto=format&fit=crop&w=180&h=180&q=80",
      storeName: "Garage Service",
      distance: "2.5km",
      discount: "Free oil change",
      category: "Automotive",
      validUntil: "April 29",
    },
  ];

  const handleFilterClick = () => {
    navigate("/filters");
  };

  return (
    <div className="px-4 py-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Latest Offers Nearby</h2>
        <button
          className="flex items-center px-3 py-1 bg-blue-500 !bg-blue-500 rounded-full text-white text-sm"
          onClick={handleFilterClick}
          style={{ backgroundColor: '#3b82f6' }} /* Adding inline style for stronger override */
        >
          <Filter className="w-4 h-4 mr-1" />
          Filters
        </button>
      </div>

      {/* Grid for offers */}
      <div className="grid grid-cols-2 gap-4">
        {offers.map((offer, index) => (
          <OfferCard
            key={index}
            imageSrc={offer.imageSrc}
            storeName={offer.storeName}
            distance={offer.distance}
            discount={offer.discount}
            category={offer.category}
            validUntil={offer.validUntil}
            happyHours={offer.happyHours}
            description={offer.description}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestOffers;
