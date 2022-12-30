import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [currentPage, setCurrentPage] = useState("/")

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  function scrollToCoding(){
    if(window.location.pathname != '/'){
      localStorage.setItem('location', 'coding')
      window.location.href = "/"
    } else {
      window.scrollTo({top: 900, left:0})
    }
  
  }

  function scrollToLanding(){
    if(window.location.pathname != '/'){
      window.location.href = "/"
    } else {
      window.scrollTo({top:0, left:0})
    }
   
  }

  useEffect(() => {
    showButton();
 
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <div className='mynavbar'>
        <div className='mynavbar-container'>
          <div className='mynavbar-logo' onClick={scrollToLanding}>
            SWM
          </div>
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
              <li className='mynav-item mynav-links' id="coding" onClick={scrollToCoding}>
                  Experience 
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