import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselDefault = () => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots custom-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
    customPaging: () => (
      <div className="w-2 h-2 bg-gray-300 rounded-full mx-1"></div>
    ),
  };

  return (
    <div className="px-4 mb-6">
      <div className="w-full aspect-[2/1] rounded-lg overflow-hidden shadow-md">
        <Slider {...settings}>
          <div>
            <div className="relative h-full bg-black">
              <img
                src="https://www.tatazudio.com/sites/default/files/styles/hro_scp_dfp/public/2023-01/hro-mainbanner-hp1-m-en.jpg?itok=Q8jgkR91"
                alt="TATA Zudio"
                className="w-full h-full object-cover opacity-100"
              />
            </div>
          </div>
          <div>
            <div className="relative h-full">
              <img
                src="https://images.unsplash.com/photo-1581318694548-0fb6e47fe59b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                alt="Electronics Sale"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <div className="relative h-full">
              <img
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                alt="Grocery Sale"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Slider>
      </div>
      <style jsx>{`
        .custom-dots {
          bottom: -15px;
        }
        .custom-dots li.slick-active div {
          background-color: #3b82f6;
          width: 6px;
          height: 6px;
          margin-top: -2px;
        }
      `}</style>
    </div>
  );
};

export default CarouselDefault;
