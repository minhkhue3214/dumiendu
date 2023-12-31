import React from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Slider from '../../components/Slider/Slider'
import MagicVideo from '../../components/MagicVideo/MagicVideo'
import GridGift from '../../components/GridGift/GridGift';
import Footer from '../../components/Footer/Footer';
import MagicBg from '../../components/MagicBg/MagicBg';

import './style.css'

const happy = () => {
  return (
    <div className='happy-container'>
      <Navbar />
      <Slider />
      {/* <MagicBg /> */}
      <MagicVideo />
      <GridGift />
      <Footer />
    </div>
  )
}

export default happy