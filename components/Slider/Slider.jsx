import React from 'react'
import { Carousel } from 'antd';
import './style.css'
import MagicBg from '../MagicBg/MagicBg';


const Slider = () => {

    const contentStyle = {
        height: '100vh',
        width: "100%",
        color: '#fff',
        objectFit: 'cover',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    return (
        <div className='slider_container'>
            <Carousel autoplay>
                <div className='sider'>
                    <img style={contentStyle} src="/img/bear1.jpg" alt="" />
                </div>
                <div className='sider'>
                    <img style={contentStyle} src="/img/bear2.jpg" alt="" />
                </div>
                <div className='sider'>
                    <img style={contentStyle} src="/img/bear2.jpg" alt="" />
                </div>
                <div className='sider'>
                    <img style={contentStyle} src="/img/bear4.jpg" alt="" />
                </div>
            </Carousel>
            <MagicBg />
        </div>
    )
}

export default Slider