import React, { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { IoFilter } from "react-icons/io5"; // Added filter icon
import { FiDownload } from "react-icons/fi"; // Added download icon
import { useNavigate } from "react-router-dom";

const LikedStores = () => {
  const navigate = useNavigate();

  const [stores, setStores] = useState([
    { id: 1, name: "Name of store", distance: "2km", category: "Category", image: "https://via.placeholder.com/150", notifications: true },
    { id: 2, name: "Name of store", distance: "2km", category: "Category", image: "https://via.placeholder.com/150", notifications: false },
    { id: 3, name: "Name of store", distance: "2km", category: "Category", image: "https://via.placeholder.com/150", notifications: true },
    { id: 4, name: "Name of store", distance: "2km", category: "Category", image: "https://via.placeholder.com/150", notifications: false },
  ]);

  const toggleNotifications = (id) => {
    setStores((prevStores) =>
      prevStores.map((store) =>
        store.id === id ? { ...store, notifications: !store.notifications } : store
      )
    );
  };

  const onBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
     {/* Top Bar */}
<div className="bg-white text-black p-4 shadow">
  {/* First Row: Back Button + Title */}
  <div className="flex items-center justify-between mb-2">
    <div className="flex items-center">
      <button onClick={onBack} className="mr-4">
        <IoMdArrowBack className="text-blue-500 text-xl" />
      </button>
      <div className="text-base font-semibold">LIKED STORES</div>
    </div>
  </div>

  {/* Second Row: Filter on left, Download on right */}
  <div className="flex items-center justify-between">
    <button className="text-sm flex items-center text-blue-500">
      <IoFilter className="w-5 h-5 mr-1" />
      FILTERS
    </button>
    <button className="text-blue-500">
      <FiDownload className="w-6 h-6" />
    </button>
  </div>
</div>


      {/* Store Grid */}
      <main className="flex-1 p-4">
        {stores.length === 0 ? (
          <p className="text-gray-600 text-center">You haven't liked any stores yet!</p>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {stores.map((store) => (
              <div key={store.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={store.image} alt={store.name} className="w-full h-40 object-cover" />
                <div className="p-3">
                  <h2 className="text-lg font-semibold">{store.name} ({store.distance})</h2>
                  <p className="text-gray-600 text-sm">{store.category}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm">Notifications</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={store.notifications}
                        onChange={() => toggleNotifications(store.id)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-purple-600 transition-colors"></div>
                      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default LikedStores;