import React, { useState } from 'react'
import './style.css'

const GiftBox = ({ openGift, setOpenGift }) => {
  const openBox = () => {
    setOpenGift(true)
  }

  return (
    <div className="giftBox bounce-in-top ">
      <div className={`box ${openGift ? 'invisible' : ''}`} onClick={() => openBox()}>
        <div className="box-tape">
          <div className="box-tape-left"></div>
          <div className="box-tape-right"></div>
          <div className="box-tape-center"></div>
        </div>
        <div className="box-gifts">
          <div className="box-gift-shadow"></div>
        </div>
        <div className="box-gift"></div>
        <div className="box-star box-star-1"></div>
        <div className="box-star box-star-2"></div>
        <div className="box-star box-star-3"></div>
        <div className="box-star box-star-4"></div>
        <div className="box-star box-star-5"></div>
      </div>
      <div className={`box-content ${openGift ? '' : 'invisible'}`} >
        <img className='slide-top' src="../../public/webear.gif"></img>
        <img className='scale-up-center' src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"></img>
        <div className='tracking-in-contract'>Just Happy to know you Just Happy to know you Just Happy to know you Just Happy to know you</div>
      </div>
    </div>
  )
}

export default GiftBox