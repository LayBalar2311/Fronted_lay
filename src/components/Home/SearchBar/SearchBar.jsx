import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Mic, Bell, Gift } from "lucide-react";
import Notification from "../Notification/Notification";

const SearchBar = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  return (
    <div className="px-4 pb-4">
      <div className="relative flex items-center">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-12 py-3 border border-gray-200 rounded-full bg-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 shadow-sm"
            placeholder="Search"
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <div className="h-full w-px bg-gray-200 mr-3"></div>
            <div className="pr-3">
              <Mic className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
        
        <div className="flex ml-3 space-x-3">
          <button 
            className="p-2 rounded-full bg-black/90 border border-gray-700 text-white shadow-md"
            onClick={toggleNotification}
          >
            <Bell className="h-5 w-5" />
          </button>
          
          <button 
            className="p-2 rounded-full bg-black/90 border border-gray-700 text-white shadow-md"
            onClick={() => navigate("/special-offers")}
          >
            <Gift className="h-5 w-5" />
          </button>
        </div>
      </div>

      {isNotificationOpen && (
        <div className="fixed inset-0 z-50">
          <Notification onBack={toggleNotification} />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
