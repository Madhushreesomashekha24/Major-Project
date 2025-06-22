import React, { useState } from 'react';
import './Home.css';

// Component imports (make sure the paths are correct based on your folder structure)
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';

const Home = () => {
  // State to manage selected category for filtering food items
  const [category, setCategory] = useState("All");

  return (
    <main className="home">
      {/* Top section with banner or hero image */}
      <Header />

      {/* Menu filter section */}
      <ExploreMenu category={category} setCategory={setCategory} />

      {/* Display food items based on selected category */}
      <FoodDisplay category={category} />

      {/* Section to promote app download */}
      <AppDownload />
    </main>
  );
};

export default Home;
