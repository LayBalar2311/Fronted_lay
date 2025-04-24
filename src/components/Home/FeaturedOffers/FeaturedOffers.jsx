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
  {
    bg: "bg-black",
    offerText: "50% OFF",
    storeName: "Classic Store",
    distance: "2km",
    img: "https://images.unsplash.com/photo-1618354691265-f9d4fdfeb29a?auto=format&fit=crop&w=600&q=60",
  },
  {
    bg: "bg-white",
    offerText: "Upto 50% OFF",
    storeName: "Shoe Bazaar",
    distance: "2km",
    img: "https://images.unsplash.com/photo-1585386959984-a4155223f8e1?auto=format&fit=crop&w=600&q=60",
  },
  {
    bg: "bg-white",
    offerText: "Upto 50% OFF",
    storeName: "Bag World",
    distance: "2km",
    img: "https://images.unsplash.com/photo-1603808033192-082d6919d2d2?auto=format&fit=crop&w=600&q=60",
  },
  {
    bg: "bg-white",
    offerText: "Flat 30% OFF",
    storeName: "Fashion Hub",
    distance: "3km",
    img: "https://images.unsplash.com/photo-1556909190-447063d1a70d?auto=format&fit=crop&w=600&q=60",
  },
  {
    bg: "bg-white",
    offerText: "Buy 1 Get 1",
    storeName: "Watch Point",
    distance: "1.5km",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=60",
  },
];


  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    responsive: [
      { breakpoint: 1536, settings: { slidesToShow: 5 } },
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-white py-6 max-w-7xl mx-auto px-4">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Special Offers</h2>
      <Slider key={windowWidth} {...sliderSettings}>
        {offers.map((offer, idx) => (
          <div key={idx} className="px-1">
  <div className="rounded-t-full rounded-b-2xl overflow-hidden max-w-[180px] mx-auto">
    <div className={`h-36 flex items-center justify-center ${offer.bg}`}>
      {offer.img ? (
        <img
          src={offer.img}
          alt={offer.offerText}
          className="w-full h-full object-cover"
        />
      ) : (
        <h3 className="text-3xl font-bold text-yellow-400">
          {offer.offerText}
        </h3>
      )}
    </div>
    <div className="text-center py-4 px-3 bg-transparent">
      <p className="text-sm font-semibold text-gray-800">
        {offer.offerText}
      </p>
      <p className="text-xs text-gray-500 mt-1">
        {offer.storeName} • {offer.distance}
      </p>
    </div>
  </div>
</div>

        ))}
      </Slider>
    </section>
  );
};

export default FeaturedOffers;
