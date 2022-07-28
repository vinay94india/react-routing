import React from "react";
import {Link } from 'react-router-dom';
import './Style.css'

const Navbar = () => {
    return (
      <div className="navbar">
        <Link className="links" to="/">Home </Link>
        <Link className="links" to="/about">About Us </Link>
        <Link className="links" to="/contact">Contact Us </Link>
        <Link className="links" to="/contact/name">Name page inside contact </Link>

      </div>
    );
  };

  export default Navbar;