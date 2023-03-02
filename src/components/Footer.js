import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
        
            <h4>Contact Info</h4>
            <h6 className='email'> Rhinoam@gmail.com</h6>
            <h6 className='phone_number'> 941 387 5069</h6>
        </div>
       
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              Sarsen Whatmore Management
            </Link>
          </div>
          <div className='social-icons'>      
            <a
              class='social-icon-link github'
              href='https://github.com/revelationsz?tab=repositories'
              target='_blank'
              aria-label='Github'
            >
              <i className='fab fa-github' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https://www.linkedin.com/in/sarsen-whatmore-20b48b202/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div> 
         </div>
      </section>
      <div className= ' web-rights'>
            <small className='website-rights'>SWM © 2023</small>
          </div>
    </div>
  );
}

export default Footer;