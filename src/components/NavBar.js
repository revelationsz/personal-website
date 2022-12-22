import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <div className='mynavbar'>
        <div className='mynavbar-container'>
          <Link to='/' className='mynavbar-logo' onClick={closeMobileMenu}>
            SWM
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'mynav-menu active' : 'mynav-menu'}>
          <li className='mynav-item'>
              <Link
                to='/about'
                className='mynav-links'
                onClick={closeMobileMenu}
              >
                About Me
              </Link>
            </li>
            <li className='mynav-item'>
              <Link
                to='/coding'
                className='mynav-links'
                onClick={closeMobileMenu}
              >
                Coding 
              </Link>
            </li>
           
            <li className='mynav-item'>
              <Link
                to='/jobs'
                className='mynav-links'
                onClick={closeMobileMenu}
              >
                Jobs 
              </Link>
            </li>
          </ul>
         
        </div>
      </div>
    </>
  );
}

export default Navbar;