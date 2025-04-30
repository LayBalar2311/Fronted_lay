import { useState } from 'react';
import { ArrowLeft } from 'lucide-react'; // Optional: for a nice back arrow icon

export default function FiltersScreen() {
  const tabs = ['Category', 'Offer Type', 'Validity', 'Distance', 'Store Type'];
  const [activeTab, setActiveTab] = useState('Category');

  const options = {
    'Category': ['Grocery', 'Alcohol & Beverages', 'Snacks', 'Personal Care', 'Household', 'Electronics', 'Fashion'],
    'Offer Type': ['Buy 1 Get 1 Free', 'Flat Discount', 'Bundle Deals', 'Cashback / Store Credit', 'Spotlight', 'Happy Hours', 'Spinners'],
    'Validity': ['Expiring Soon', 'Today Only', 'This Week', 'Ongoing'],
    'Distance': ['Within 1 km', '1-3 km', '3-5 km', '5+ km'],
    'Store Type': ['Supermarket / Grocery', 'Liquor Store', 'Convenience Store', 'Department Store', 'Salon', 'Spa', 'Car Wash'],
  };

  const handleBack = () => {
    window.history.back(); 
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="flex items-center p-4 text-lg font-semibold bg-white border-b">
        <button onClick={handleBack} className="mr-3 text-gray-600 hover:text-black">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <span>Filters</span>
      </div>

      {/* Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-1/3 bg-white border-r flex flex-col">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`p-4 text-left text-sm border-b ${
                activeTab === tab ? 'bg-gray-200 font-semibold' : 'hover:bg-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Options */}
        <div className="w-2/3 bg-white p-4 overflow-y-auto">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 text-sm border rounded"
            />
          </div>
          <div className="space-y-3">
            {options[activeTab]?.map((item, index) => (
              <label key={index} className="flex items-center space-x-2 text-sm">
                <input type="checkbox" className="w-4 h-4" />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
