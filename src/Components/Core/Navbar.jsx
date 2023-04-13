import React from 'react';
import { NavLink } from 'react-router-dom';

const menuItems = [
  {
    title: 'Users',
    to: '/users'
  }
];

const Navbar = () => {
  return (
    <div className="navbar bg-primary
    sticky top-0 z-30 flex h-16 w-full bg-opacity-90 backdrop-blur transition-all duration-100 
    bg-base-100 shadow-sm text-white
    ">
      <a className="btn btn-ghost normal-case text-xl">FaceIT Lunch</a>
    </div>
  );
}

export default Navbar;
