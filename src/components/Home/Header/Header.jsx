import React from "react";

const Header = () => {
  return (
    <div className="bg-gradient-to-b from-orange-100 to-white px-4 pt-4 pb-2">
      <div className="flex justify-between items-center">
        {/* Location + Dropdown */}
        <div className="flex items-center">
          <div>
            <p className="text-xs text-gray-500 flex items-center">
            <span className="mr-1">📍</span>
            <span>Current Location</span>
          </p>
          <p className="text-sm font-semibold ml-2 ">
            A-01, Bank street , new delhi-110096 A-...
          </p>
          </div>
          <span className="ml-4 text-gray-600">▼</span>
        </div>
        {/* Gift Icon */}
        <div className="text-xl text-gray-700">
          🎁
        </div>
      </div>
    </div>
  );
};

export default Header;