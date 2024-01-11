import React from 'react'
import { Carousel } from 'antd';
import './style.css'
import MagicBg from '../MagicBg/MagicBg';


const Slider = () => {

    const contentStyle = {
        height: '100vh',
        width: "100%",
        // color: '#fff',
        objectFit: 'cover',
        // lineHeight: '160px',
        // textAlign: 'center',
        // background: '#364d79',
    };

    return (
        <div className='slider_container'>
            <Carousel autoplay>
                <div className='sider'>
                    <img style={contentStyle} src="https://www.wallpapersshare.com/img/big/happy-birthday-celebration-day-4k-wallpaper.jpg" alt="" />
                </div>
                <div className='sider'>
                    <img style={contentStyle} src="https://static.vecteezy.com/system/resources/previews/027/110/663/large_2x/vivid-birthday-cake-background-free-photo.jpg" alt="" />
                </div>
                <div className='sider'>
                    <img style={contentStyle} src="https://w.forfun.com/fetch/97/97f8eb330a986059d08257a4a132cb30.jpeg" alt="" />
                </div>
                <div className='sider'>
                    <img style={contentStyle} src="https://wallpapercrafter.com/desktop/217833-a-birthday-cake-with-frosting-and-happy-birthday-c.jpg" alt="" />
                </div>
            </Carousel>
            <MagicBg />
        </div>
    )
}

export default Slider