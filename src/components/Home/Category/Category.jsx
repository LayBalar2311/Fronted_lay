import React from "react";

const Category = () => {
  return (
    <div className="category flex justify-between m-4">
      <div className="items-center flex flex-col">
        <span className="text-2xl">🍽️</span>
        <p>Food</p>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl">🏠</span>
        <p>Property</p>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl">🚗</span>
        <p>Vehical</p>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl">💆</span>
        <p>Spa & Salon</p>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl">+</span>
        <p>View All</p>
      </div>
    </div>
  );
};

export default Category;