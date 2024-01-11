import React, { useEffect, useState } from 'react';
import GiftBox from '../GiftBox/GiftBox'
import './style.css'

const LightBox = ({ isDisplay, setisDisplay, imgBox, isGiftGox }) => {
  const [openGift, setOpenGift] = useState(false)
  let audio = new Audio("../../public/Vai-Lan-Don-Dua-Cover-SOOBIN-Touliver.mp3")


  const closeBg = () => {
    isGiftGox ? " " : setisDisplay(false)
    if (openGift) {
      setOpenGift(false);
      setisDisplay(false);
      // audio.pause()
    }
  }

  
  const onStart = () => {
    audio.play()
  }

  const overlayClass = `lightbox_bg ${isDisplay ? "" : "invisible"}`;

  return (
    <div onClick={() => (closeBg())} className={overlayClass}>
      {
        isGiftGox ? <GiftBox openGift={openGift} setOpenGift={setOpenGift} onStart={onStart} /> : <img className='lightbox_container fade-in-bck' src={imgBox} alt="" />
      }
    </div>

  )
}

export default LightBox