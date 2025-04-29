import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Offers from "./components/Hourly Offers/Offers";
import UserProfile from "./components/Profile/UserProfile";
import SpecialOffers from "./components/Special Offer/SpecialOffers";
import UserInfo from './components/Profile/MenuItems/MyAccount/UserInfo'; 
import LikedStores from "./components/Home/LikedStores/LikedStores";
import StorePage from "./components/Home/StorePage/StorePage";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-4 pb-0 min-h-screen"> {/* pb-20 to match navbar height (~80px) */}
        <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/offers" element={<Offers />} />
  <Route path="/profile" element={<UserProfile />} />
  <Route path="/special-offers" element={<SpecialOffers />} />
  <Route path="/account" element={<UserInfo />} />
  <Route path="/liked-stores" element={<LikedStores />} /> {/* Add this safely */}
<Route path="/store" element={<StorePage />} />
</Routes>

      </main>
    </Router>
  );
}

export default App;
