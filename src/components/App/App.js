
import React from "react";
import styles from "./App.module.css";

import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import pizza from './pizza.jpg';


const business = {   
  imageSrc: pizza,
  name: 'Gino Pizza',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Indian',
  rating: 4.5,
  reviewCount: 90   
  }

  
  const businesses = [business, business, business, business, business, business];
    

const App = () => {
  const searchYelp = (term, location, sortBy) => {
    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
  };
  return (
    <div className={styles.App}>
      <h1>ravenous</h1>
      <SearchBar searchYelp={searchYelp} />  
      <BusinessList businesses={businesses} />
    </div>
  );
};

export default App;
