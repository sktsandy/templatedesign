import React, { useState } from 'react';
import {  NavLink } from 'react-router-dom';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const ChangeNavbg = () =>{
    if(window.scrollY >= 80) {
      setNavbar(true);
    } else{
      setNavbar(false);
    }
  }
  window.addEventListener('scroll', ChangeNavbg);

    return (
        <>
      
      <div className={navbar ? 'navbar_active' : 'header'}>
            <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container">
    <NavLink className="navbar-brand" to="/"> 
        <h2> React js </h2>
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse nav_menu" id="navbarSupportedContent">
      <ul className="navbar-nav">
           <li className="nav-item">
            <NavLink exact activeClassName="a_active" className="nav-link" to="/"> HOME </NavLink>
            </li>

            <li className="nav-item">
            <NavLink activeClassName="a_active" className="nav-link" to="/About"> ABOUT </NavLink>
            </li>

            <li className="nav-item">
            <NavLink activeClassName="a_active" className="nav-link" to="Services"> SERVICES </NavLink>
            </li>

            <li className="nav-item">
            <NavLink activeClassName="a_active" className="nav-link" to="Portfolio"> PORTFOLIO </NavLink>
            </li>

            <li className="nav-item">
            <NavLink activeClassName="a_active" className="nav-link" to="Team"> TEAM </NavLink>
            </li>

            <li className="nav-item">
            <NavLink activeClassName="a_active" className="nav-link" to="Contact"> CONTACT </NavLink>
            </li>

  </ul>

    </div>
  </div>
</nav>
</div>
     
 </>
 
    )
}

export default Navbar;
