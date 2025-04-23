import React from 'react';

const Ad = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 py-8 px-4 lg:px-0">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl transform hover:scale-105 transition-all duration-300">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR45UK1xrDMXHSw9CvNM02vp_wYl_sIS2P4Bw&s" 
          alt="Pantaloons Advertisement" 
          className="rounded-t-3xl w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Ad;
