import React from 'react';
import './AppDownload.css';
import { assets } from '../../assets/assets'; // adjust path as needed

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience Download<br /> Swiggy App</p>
      <div className="app-download-platform">
        <img src={assets.play_store} alt="Play Store" />
        <img src={assets.app_store} alt="App Store" />
      </div>
    </div>
  );
};

export default AppDownload;
