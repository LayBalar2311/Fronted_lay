import React from 'react';
import { User, Pencil } from 'lucide-react';

const ProfileHeader = () => {
  return (
    <div className="relative flex items-center bg-blue-600 rounded-2xl mx-4 mb-5 p-4 text-white shadow-lg">
      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 text-xl mr-4">
        <User size={28} />
      </div>
      <div className="flex-col justify-start">
        <h2 className="text-lg font-semibold">xyx</h2>
        <p className="text-sm">@xyz</p>
      </div>
      <Pencil 
        size={20} 
        className="text-white absolute bottom-3 right-3"
      />
    </div>
  );
};

export default ProfileHeader;
