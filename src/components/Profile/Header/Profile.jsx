import React from 'react';

const Profile = () => (
  <a href="#profile" className="flex flex-col items-center text-gray-600 hover:text-black">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
    </svg>
    <span className="text-xs">Profile</span>
  </a>
);

export default Profile;
