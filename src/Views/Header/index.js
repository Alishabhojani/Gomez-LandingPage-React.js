import React, { useState } from 'react';
import Hero from '../Hero';
import { FaRegMoon } from 'react-icons/fa';
import logopic1 from '../../images/logopic1.svg';
import moon from '../../images/moon.jpg';
import bg from '../../images/bg.jpeg';
import '../../App.css';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  window.addEventListener("scroll",function(){
    const header = document.querySelector(".fixmenu")
    header.classList.toggle("active",window.
   scrollY > 80 )
  })

  return (
    <>
      <div className='blur'>

        <header className="mainmenu">
          <div className='fixmenu'>
          <div className='main'>
            <div className="logo">
              <img src={logopic1} alt="Logo" />
            </div>
            <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
              <ul>
                <li>
                  <a href="/">Services</a>
                  <ul className="submenu">
                    <li><a href="/">Buy</a></li>
                    <li><a href="/">Sell</a></li>
                    <li><a href="/">Rent</a></li>
                    <li><a href="/">Mortgage Calculator</a></li>
                  </ul>
                </li>
                <li>
                  <a href="/">Our Team</a>
                  <ul className="submenu">
                    <li><a href="/">Our Team</a></li>
                    <li><a href="/">Become a Realtor</a></li>
                  </ul>
                </li>
                <li>
                  <a href="/">Learn</a>
                  <ul className="submenu">
                    <li><a href="/">First-Time Home Buyer Guide</a></li>
                    <li><a href="/">Home Marketing Guide</a></li>
                    <li><a href="/">Frequently Asked Questions</a></li>
                  </ul>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
              </ul>
            </nav>
            <div className="login">
              <button className='btn1'>Login</button>
            </div>
            <div className='moondiv'>
              <FaRegMoon className='moonlogo' />
            </div>
          </div>
          </div>
          <Hero />
        </header>
      </div>
    </>
  );
};

export default Header;
