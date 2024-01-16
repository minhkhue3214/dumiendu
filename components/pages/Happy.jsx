import React from 'react';
import Navbar from '../Navbar2/Navbar2'
import Slider from '../Slider/Slider'
import MagicVideo from '../MagicVideo/MagicVideo'
import GridGift from '../GridGift/GridGift';
import Footer from '../Footer2/Footer';
import MagicBg from '..//MagicBg/MagicBg';
import TerminalText from '../TerminalText/TerminalText';

import './style.css'

const happy = () => {
  return (
    <div className='happy-container'>
      <Navbar />
      <Slider />
      <MagicVideo />
      <TerminalText />
      <GridGift />
      <Footer />
    </div>
  )
}

export default happy