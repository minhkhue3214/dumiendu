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
      <svg xmlns="http://www.w3.org/2000/svg" width="55px" height="55px" viewBox="0 0 24 24" fill="none">
        <path d="M12 20L12 4M12 4L18 10M12 4L6 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  );
};

export default ScrollUp;
