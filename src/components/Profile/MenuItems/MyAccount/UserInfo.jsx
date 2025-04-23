import React, { useState } from "react";
import { FaEdit, FaUser, FaGift } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import { HiUserCircle } from "react-icons/hi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    age: "",
    gender: "",
    email: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div>
        <div className="flex items-center p-4">
          <IoMdArrowBack
            className="text-2xl mr-2 cursor-pointer"
            onClick={() => navigate(-1)}
          />
          <div className="text-base font-semibold text-gray-800 text-left">
            My Account
          </div>
        </div>

        {/* Profile */}
        <div className="bg-blue-600 text-white rounded-xl mx-4 p-4 flex items-center gap-4 shadow-md">
          <div className="bg-white rounded-full p-2">
            <HiUserCircle className="text-4xl text-gray-600" />
          </div>
          <div>
            <h2 className="text-lg font-bold">xyz</h2>
            <p className="text-sm">@xyz</p>
          </div>
        </div>

        {/* Form Fields */}
        <div className="mt-6 px-4 space-y-4">
          {[
            { label: "Name", placeholder: "Full name", key: "name" },
            { label: "Mobile Number", placeholder: "+91 XXXXXX XXXXX", key: "mobile" },
            { label: "Age", placeholder: "Enter Age", key: "age" },
            { label: "Gender", placeholder: "Select Gender", key: "gender" },
            { label: "Email", placeholder: "Enter email", key: "email" },
          ].map((field) => (
            <div key={field.key}>
              <label className="block text-sm text-gray-600 mb-1 font-bold">{field.label}</label>
              <div className="relative">
                {field.key === "gender" ? (
                  <select
                    value={formData[field.key]}
                    onChange={(e) => handleChange(field.key, e.target.value)}
                    className="w-full bg-gray-100 border-none rounded-lg px-4 py-2 text-sm text-gray-800 focus:outline-none"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                ) : (
                  <>
                    <input
                      type="text"
                      placeholder={field.placeholder}
                      value={formData[field.key]}
                      onChange={(e) => handleChange(field.key, e.target.value)}
                      className="w-full bg-gray-100 border-none rounded-lg px-4 py-2 pr-10 text-sm text-gray-800 focus:outline-none"
                    />
                    <FaEdit className="absolute right-3 top-3 text-gray-400 text-sm" />
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="px-4 pt-6 pb-4 flex justify-between gap-2">
        <button
          className="w-1/2 py-3 border-4 border-blue-600 text-blue-600 text-base font-semibold rounded-xl"
          style={{ borderColor: "#2563EB" }}
        >
          Discard
        </button>
        <button
          className="w-1/2 py-3 bg-blue-600 text-white text-base font-semibold rounded-xl"
          style={{ backgroundColor: "#2563EB" }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default UserInfo;