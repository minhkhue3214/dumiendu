import React, { useState } from 'react';
import GiftBox from '../GiftBox/GiftBox'
import './style.css'

const LightBox = ({ isDisplay, setisDisplay, imgBox, isGiftGox }) => {

  const closeBg = () => {
    setisDisplay(false)
  }

  const overlayClass = `lightbox_bg ${isDisplay ? "" : "invisible"}`;

  return (
    <div onClick={() => (closeBg())} className={overlayClass}>
      {
        isGiftGox ? <GiftBox /> : <img className='lightbox_container' src={imgBox} alt="" />
      }
    </div>

  )
}

export default LightBox