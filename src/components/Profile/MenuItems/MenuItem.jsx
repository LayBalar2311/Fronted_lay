import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const MenuItem = ({ icon, title, description, onClick }) => {
  return (
    <div
      className="flex items-center p-3 bg-white shadow-sm hover:bg-gray-50 cursor-pointer mx-4 mb-2"
      onClick={onClick} // Add onClick support here
    >
      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 mr-3">
        {icon}
      </div>
      <div className="flex-1 text-left">
        <h4 className="text-sm font-medium text-gray-800">{title}</h4>
        {description && <p className="text-xs text-gray-500 mt-0.5">{description}</p>}
      </div>
      <div className="text-gray-400">
        <FaChevronRight />
      </div>
    </div>
  );
};

export default MenuItem;
