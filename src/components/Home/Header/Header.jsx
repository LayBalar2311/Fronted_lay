import React, { useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Header = () => {
  useEffect(() => {
    // Add wave animation style to head
    const style = document.createElement('style');
    style.textContent = `
      @keyframes wave {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  return (
    <div className="px-4 pt-5 pb-3 relative">
      <div className="flex justify-between items-center">
        {/* Location + Dropdown */}
        <div className="flex items-center flex-grow">
          <div className="flex items-baseline">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center mr-2 border border-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <p className="text-base font-bold text-gray-800 flex items-center">
                  Current Location
                  <ChevronDown className="w-4 h-4 ml-1" />
                </p>
                <p className="text-xs text-gray-600 mt-0.5 max-w-60 truncate">
                  A-01, Bank street, new delhi-110096 A-...
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Heart Icon */}
        <div className="ml-4">
          <div className="w-10 h-10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;