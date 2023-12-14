import React from 'react';
import { ArrowUpOutlined } from '@ant-design/icons';
import './style.css';

const ScrollUp = () => {
  const handleScrollUp = () => {
    // Cuộn lên trên đầu của trang
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Cuộn mượt
    });
    location.reload();
  };

  return (
    <div className='scroll-up' onClick={handleScrollUp}>
      <ArrowUpOutlined style={{ fontSize: '30px' }} />
    </div>
  );
};

export default ScrollUp;
