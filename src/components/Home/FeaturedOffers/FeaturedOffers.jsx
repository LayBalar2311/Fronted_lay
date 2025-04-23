import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeaturedOffers = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const offers = [
    { imageSrc: "https://via.placeholder.com/224x150?text=Offer+1", offerText: "Up to 20% OFF", storeName: "Store A", distance: "2km" },
    { imageSrc: "https://via.placeholder.com/224x150?text=Offer+2", offerText: "Buy One Get One Free", storeName: "Store B", distance: "1km" },
    { imageSrc: "https://via.placeholder.com/224x150?text=Offer+3", offerText: "Up to 20% OFF", storeName: "Store C", distance: "2km" },
    { imageSrc: "https://via.placeholder.com/224x150?text=Offer+4", offerText: "50% OFF First Purchase", storeName: "Store D", distance: "3km" },
    { imageSrc: "https://via.placeholder.com/224x150?text=Offer+5", offerText: "Free Shipping", storeName: "Store E", distance: "1.5km" },
    { imageSrc: "https://via.placeholder.com/224x150?text=Offer+6", offerText: "Up to 30% OFF", storeName: "Store F", distance: "2.5km" },
    { imageSrc: "https://via.placeholder.com/224x150?text=Offer+7", offerText: "10% OFF Everything", storeName: "Store G", distance: "4km" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    centerMode: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="bg-white pt-4 pb-0 max-w-7xl mx-auto">
      <h2 className="text-xl font-bold text-gray-900">Featured Offers</h2>
      <div className="relative">
        <Slider key={windowWidth} {...settings}>
          {offers.map((offer, index) => (
            <div key={index} className="px-1">
              <div className="bg-white rounded-xl shadow overflow-hidden w-full max-w-[220px] mx-auto">
                <div className="relative">
                  <img
                    src={offer.imageSrc}
                    alt={offer.offerText}
                    className="w-full h-40 object-cover"
                    onError={(e) => (e.target.src = "https://via.placeholder.com/224x150?text=Image+Error")}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h3 className="text-white text-base font-semibold text-center px-2">
                      {offer.offerText}
                    </h3>
                  </div>
                </div>
                <div className="p-3 text-center">
                  <p className="text-gray-700 text-sm">
                    {offer.storeName} ({offer.distance})
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedOffers;
