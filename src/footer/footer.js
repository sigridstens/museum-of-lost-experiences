import React from 'react';
import './footer.css';
import {Link} from 'react-router-dom';


function Footer() {
    return(
        <footer>
          <nav className="navigation footer-nav col-half">
            <ul>
              <li className="nav-item">
                <Link to="/full-collection" className=''>Collection</Link>
              </li>
              <li className="nav-item">
                <Link to="/participate" className=''>Participate</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className=''>About</Link>
              </li>
            </ul>
          </nav>

          <div className="col-half navigation right-side">
            <ul className="social">
              <li>
                <a href="https://www.instagram.com/themuseumoflostexperiences/" target="blank"><i className="fab fa-instagram"></i></a>
              </li>
            </ul>
            <p>Copyright 2020</p>
          </div>
        </footer>
    )
}

export default Footer;