import React from 'react';
import Header from './Header/Header';
import SearchBar from './SearchBar/SearchBar';
import Category from './Category/Category';
import CarouselDefault from './Slider/Slider';
import LatestOffers from './LatestOffers/LatestOffers';
import FeaturedOffers from './FeaturedOffers/FeaturedOffers';
import Products from './Products/Products';
import Ad from './Ad/Ad';
import NearbyStores from './NearbyStores/NearbyStores';
import FiltersScreen from './Filters/Filters';

const Home = () => (
  <div className="bg-white min-h-screen pb-20">
    <div className="bg-gradient-to-b from-blue-400 via-blue-100 to-white pb-2">
      <Header />
      <div className="bg-gradient-to-b from-transparent to-white">
        <SearchBar />
        <Category />
      </div>
    </div>
    <CarouselDefault />
    <LatestOffers />
    <div className="border-t border-gray-100 py-3"></div>
    <NearbyStores />
    <div className="border-t border-gray-100 py-3"></div>
    <Products />
  </div>
);

export default Home;
