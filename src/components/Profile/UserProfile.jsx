import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import TwoFactorAuthentication from './MenuItems/TwoFactorAuthentication';
import Settings from './MenuItems/Settings';
import AboutApp from './MenuItems/AboutApp';
import Faqs from './QuickLinks/Faqs';
import AboutUs from './QuickLinks/AboutUs';
import TermsOfUse from './QuickLinks/TermsOfUse';
import PrivacyPolicy from './QuickLinks/PrivacyPolicy';
import ProfileHeader from './Header/ProfileHeader';
import LogOut from './LogOut/LogOut';
import CouponHistory from './MenuItems/CouponHistory';
import CreateBusinessAccount from './MenuItems/CreateBusinessAccount';
import HelpSupport from './MenuItems/HelpSupport';
import MyAccount from "./MenuItems/MyAccount/MyAccount";

const UserProfile = () => {
  const navigate = useNavigate(); // 👈 Add this line

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 w-full">
      <div className="p-4 text-2xl font-bold text-gray-800 text-left">Profile</div>
      <ProfileHeader />
      <MyAccount onClick={() => navigate("/account")} /> {/* 👈 onClick handler passed */}
      <CouponHistory />
      <CreateBusinessAccount />
      <TwoFactorAuthentication />
      <Settings />
      <HelpSupport />
      <AboutApp />

      {/* Footer Links */}
      <div className="mt-4 mb-4 items-start p-3 bg-white shadow-sm hover:bg-gray-50 cursor-pointer mx-4">
        <Faqs />
        <AboutUs />
        <TermsOfUse />
        <PrivacyPolicy />
      </div>

      {/* Log Out Button */}
      <LogOut />

      {/* Navbar */}
      <Navbar />
    </div>
  );
};

export default UserProfile;
