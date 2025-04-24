import React from 'react';
import Header from './Header/Header';
import SearchBar from './SearchBar/SearchBar';
import Category from './Category/Category';
import CarouselDefault from './Slider/Slider';
import LatestOffers from './LatestOffers/LatestOffers';
import FeaturedOffers from './FeaturedOffers/FeaturedOffers';
import Products from './Products/Products';
import Ad from './Ad/Ad';  // <-- Add this line!
import NearbyStores from './NearbyStores/NearbyStores';

const Home = () => (
  <div style={{ maxWidth: '100%', overflowX: 'hidden' }}>
    <Header />
    <SearchBar />
    <Category />
    <CarouselDefault />
    <LatestOffers />
  
   
    <NearbyStores/>
    <Ad />
    <Products />
    <Ad/>
  </div>
);

export default Home;
