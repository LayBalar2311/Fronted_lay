import React from 'react';

const StoreInfo = () => {
  return (
    <div className="bg-white rounded-lg p-4 mt-4 w-full max-w-md flex flex-col items-center justify-center">
      <div className="flex items-center">
        <div>
          <h2 className="text-lg font-bold">Shop Name</h2>
          <p className="text-gray-600">Address</p>
          <div className="flex text-yellow-400">
            <span>★★★★★</span>
          </div>
        </div>
      </div>
<button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full">
  Get Directions
</button>
    </div>
  );
};

export default StoreInfo;
