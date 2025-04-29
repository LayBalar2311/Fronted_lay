import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Notification from "../Notification/Notification";

const SearchBar = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const toggleLikedStores = () => {
    navigate("/liked-stores");
  };

  return (
    <>
      <div className="flex items-center justify-between w-full px-4 py-3 gap-2 overflow-x-hidden" style={{ backgroundColor: '#ffffff' }}>
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

        <div className="flex items-center gap-4 shrink-0">
          <button className="text-gray-600 focus:outline-none" onClick={toggleNotification}>🔔</button>
          <button className="text-gray-600 focus:outline-none" onClick={toggleLikedStores}>❤️</button>
        </div>
      </div>

      {isNotificationOpen && (
        <div className="fixed inset-0 z-50">
          <Notification onBack={toggleNotification} />
        </div>
      )}
    </>
  );
};

export default SearchBar;
