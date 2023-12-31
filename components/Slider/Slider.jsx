import React from 'react'
import { Carousel } from 'antd';
import './style.css'

const Slider = () => {

    const contentStyle = {
        height: '100vh',
        width:"100%",
        color: '#fff',
        objectFit: 'cover',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    return (
            <Carousel autoplay>
                <div className='sider'>
                    <img  style={contentStyle} src="/img/bear1.jpg" alt="" />
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
    )
}

export default Slider