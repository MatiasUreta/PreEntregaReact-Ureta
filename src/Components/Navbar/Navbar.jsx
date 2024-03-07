import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <a href="../index.html">
        <img src="../public/img/logo_size.jpg" alt="Logo" />
      </a>
      <ul className="listNavBar" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to={'/'}>
          <li>Home</li>
        </Link>
        <Link to={'/categoria/landing'}>
          <li>Web Plans</li>
        </Link>
        <Link to={'/categoria/marketing'}>
          <li>Marketing Plans</li>
        </Link>
        <Link to={'/categoria/diseño'}>
          <li>Design Plans</li>
        </Link>
        <Link to={'/contact'}>
          <li>Contact</li>
        </Link>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
