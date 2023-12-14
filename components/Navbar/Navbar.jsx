import React, { useEffect, useState } from 'react'
import './style.css';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const isTop = scrollTop < 100;

      setIsScrolled(!isTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navClass = isScrolled ? 'navbar' : 'navbar black';

  return (
    <nav className={navClass}>
      <div className='nav-text left-corner'>Dumiendu</div>
      <div className='nav-text main-menu'>Happy</div>
      <div className='nav-text right-corner'>Turn on music</div>
    </nav>
  )
}

export default Navbar