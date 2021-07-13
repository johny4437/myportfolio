import React from 'react'
import logo from '../assets/logo.png';
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBars } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
          <div className="container">
            
              <a class="navbar-brand" href="#">
                {/* <img src={logo} alt="logo" className="logo"/> */}
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{color:"#fff"}} />
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">sobre eu</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">serviços</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">trabalho</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">portfólio</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">contato</a>
                  </li>
                </ul>
              </div>
          </div>
</nav>
    )
}

export default NavBar
