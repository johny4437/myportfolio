import React from 'react'
import logo from '../assets/logo.png';
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
          <div className="container">
            
              <a className="navbar-brand" href="#">
                {/* <img src={logo} alt="logo" className="logo"/> */}
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{color:"#fff"}} />
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link smooth={true}  offset={-110} to="home" className="nav-link" href="#">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link smooth={true}  offset={-110} to="about" className="nav-link" href="#aboutme">sobre eu</Link>
                  </li>
                  <li className="nav-item">
                    <Link smooth={true}  offset={-110} to="services" className="nav-link" href="#">serviços</Link>
                  </li>
                  <li className="nav-item">
                    <Link  smooth={true}  offset={-110} to="trabalhos" className="nav-link" href="#">trabalho</Link>
                  </li>
                  <li className="nav-item">
                    <Link smooth={true}  offset={-110} to="portfolio" className="nav-link" href="#">portfólio</Link>
                  </li>
                  <li className="nav-item">
                    <Link smooth={true}  offset={-110} to="contacts" className="nav-link" href="#">contato</Link>
                  </li>
                </ul>
              </div>
          </div>
</nav>
    )
}

export default NavBar
