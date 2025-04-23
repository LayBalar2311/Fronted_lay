import React from "react";

const products = [
  {
    id: 1,
    title: "Get 20% OFF",
    description: "your total bill on your next visit!",
    category: "Category",
    validity: "Valid till April 30",
    image: "https://i.imgur.com/2nCt3Sbl.jpg",
    height: "300px",
  },
  {
    id: 2,
    title: "Buy 1 Get 1 Free",
    description: "Limited Time Offer!",
    category: "Category",
    validity: "Valid till April 30",
    image: "https://i.imgur.com/yXOvdOSl.jpg",
    height: "250px",
  },
  {
    id: 3,
    title: "Get 20% OFF",
    description: "your total bill on your next visit!",
    category: "Category",
    validity: "Valid till April 30",
    image: "https://i.imgur.com/AItCxSs.jpg",
    height: "350px",
  },
  {
    id: 4,
    title: "Get 20% OFF",
    description: "your total bill on your next visit!",
    category: "Category",
    validity: "Valid 2–4pm Everyday",
    image: "https://i.imgur.com/CSceL9bl.jpg",
    height: "300px",
  },
  {
    id: 5,
    title: "Get 20% OFF",
    description: "your total bill on your next visit!",
    category: "Category",
    validity: "Valid till April 30",
    image: "data:image/jpeg;base64,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",
    height: "280px",
  },
  {
    id: 6,
    title: "New Arrival",
    description: "Check out our latest products!",
    category: "Category",
    validity: "Valid till May 15",
    image: "https://i.imgur.com/4V8Bq1l.jpg",
    height: "320px",
  },
  {
    id: 7,
    title: "50% OFF",
    description: "Only this week!",
    category: "Category",
    validity: "Valid till May 7",
    image: "https://i.imgur.com/1xuVmqY.jpg",
    height: "300px",
  },
  {
    id: 8,
    title: "Free Shipping",
    description: "On all orders above $50",
    category: "Category",
    validity: "Valid till May 1",
    image: "https://i.imgur.com/7RY9z0L.jpg",
    height: "270px",
  },
  {
    id: 9,
    title: "Buy 2 Get 1 Free",
    description: "Hurry, limited time offer!",
    category: "Category",
    validity: "Valid till May 5",
    image: "https://i.imgur.com/A6pXa3r.jpg",
    height: "310px",
  },
  {
    id: 10,
    title: "Exclusive Offer",
    description: "Get a special discount on your first order!",
    category: "Category",
    validity: "Valid till May 10",
    image: "https://i.imgur.com/Qp13f24.jpg",
    height: "290px",
  },
];

const Products = () => {
  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/300x400?text=Image+Not+Available";
  };

  return (
  <div className="p-4 columns-2 sm:columns-2 gap-4 space-y-4">
    {products.map((product) => (
      <div
        key={product.id}
        className="break-inside-avoid rounded-2xl overflow-hidden shadow-md relative bg-white"
      >
        <div className="relative">
          <img
            src={product.image}
            alt={product.title}
            className="w-full object-cover h-auto"
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-2 flex flex-col justify-end">
            <h3 className="text-white font-semibold text-lg">{product.store}</h3>
            <h2 className="text-white font-bold text-xl leading-tight">
              {product.title}
            </h2>
            <p className="text-white text-sm">{product.description}</p>
            <div className="mt-1 flex items-center gap-1">
              <span className="bg-yellow-300 text-black px-2 py-0.5 rounded-full text-sm font-semibold">
                S
              </span>
              <span className="bg-white text-black px-2 py-0.5 rounded-full text-sm">
                {product.category}
              </span>
            </div>
            <p className="text-white text-sm mt-1 font-semibold">
              {product.validity}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
);
};


export default Products;

