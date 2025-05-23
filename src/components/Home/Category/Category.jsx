import React from "react";

const Category = () => {
  return (
    <div className="flex justify-between px-4 py-5 overflow-x-auto scrollbar-hide">
      <div className="flex flex-col items-center mx-2 min-w-[70px]">
        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex justify-center items-center mb-2 shadow-sm">
          <img src="https://img.icons8.com/emoji/48/000000/bowl-with-spoon-emoji.png" alt="Food" className="w-10 h-10" />
        </div>
        <p className="text-xs font-medium">Food</p>
      </div>
      
      <div className="flex flex-col items-center mx-2 min-w-[70px]">
        <div className="w-16 h-16 bg-sky-100 rounded-2xl flex justify-center items-center mb-2 shadow-sm">
          <img src="https://img.icons8.com/color/48/000000/scissors.png" alt="Spa & Salon" className="w-10 h-10" />
        </div>
        <p className="text-xs font-medium">Spa & Salon</p>
      </div>
      
      <div className="flex flex-col items-center mx-2 min-w-[70px]">
        <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex justify-center items-center mb-2 shadow-sm">
          <img src="https://img.icons8.com/color/48/000000/car--v1.png" alt="Vehicles" className="w-10 h-10" />
        </div>
        <p className="text-xs font-medium">Vehicles</p>
      </div>
      
      <div className="flex flex-col items-center mx-2 min-w-[70px]">
        <div className="w-16 h-16 bg-amber-100 rounded-2xl flex justify-center items-center mb-2 shadow-sm">
          <img src="https://img.icons8.com/color/48/000000/home.png" alt="Property" className="w-10 h-10" />
        </div>
        <p className="text-xs font-medium">Property</p>
      </div>
      
      <div className="flex flex-col items-center mx-2 min-w-[70px]">
        <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex justify-center items-center mb-2 shadow-sm">
          <img src="https://img.icons8.com/color/48/000000/laptop-e-mail--v1.png" alt="Electronics" className="w-10 h-10" />
        </div>
        <p className="text-xs font-medium">Electronics</p>
      </div>
      
      <div className="flex flex-col items-center mx-2 min-w-[70px]">
        <div className="w-16 h-16 bg-gray-100 rounded-2xl flex justify-center items-center mb-2 shadow-sm">
          <div className="grid grid-cols-2 gap-1">
            <div className="w-2.5 h-2.5 bg-gray-400 rounded"></div>
            <div className="w-2.5 h-2.5 bg-gray-400 rounded"></div>
            <div className="w-2.5 h-2.5 bg-gray-400 rounded"></div>
            <div className="w-2.5 h-2.5 bg-gray-400 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">+</span>
            </div>
          </div>
        </div>
        <p className="text-xs font-medium text-blue-500">View All</p>
      </div>
    </div>
  );
};

export default Category;