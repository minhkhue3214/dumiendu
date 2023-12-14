import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons'
import React from 'react'
import './style.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='facebook social-icon'><a href="https://www.facebook.com/Taptap82?locale=vi_VN"><FacebookOutlined style={{ fontSize: '60px' }}/></a></div>
        <div className='instagram social-icon'><a href="https://www.instagram.com/_dumieen_du/"><InstagramOutlined style={{ fontSize: '60px' }}/></a></div>
        <div className='tiktok social-icon'><a href="https://www.tiktok.com/@dumieen.du?lang=en"><InstagramOutlined style={{ fontSize: '60px' }}/></a></div>
    </div>
  )
}

export default Footer