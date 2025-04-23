import React from "react";

const SearchBar = () => {
  return (
    <div
      className="flex items-center justify-between w-full px-4 py-3 gap-2 overflow-x-hidden"
      style={{ backgroundColor: '#ffffff' }} // Explicitly set white background
    >
      {/* Search Input Section */}
      <div className="flex items-center space-x-2 border border-gray-300 rounded px-3 py-2 flex-grow max-w-full" style={{ backgroundColor: '#ffffff' }}>
        <span className="text-gray-600">🔍</span>
        <input
          type="text"
          placeholder="Search"
          className="w-full border-none outline-none text-sm bg-transparent text-black"
        />
        <span className="border-l border-gray-300 h-5"></span>
        <button className="text-gray-600 focus:outline-none">🎙️</button>
      </div>

      {/* Icons Section */}
      <div className="flex items-center gap-4 shrink-0">
        <button className="text-gray-600 focus:outline-none">🔔</button>
        <button className="text-gray-600 focus:outline-none">❤️</button>
      </div>
    </div>
  );
};

export default SearchBar;