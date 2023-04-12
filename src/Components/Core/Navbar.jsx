import React from 'react';
import { NavLink } from 'react-router-dom';

const menuItems = [
  {
    title: 'Users',
    to: '/users'
  },
  {
    title: 'Login',
    to: '/login'
  },
  {
    title: 'Sing Up',
    to: '/register'
  },
];

const Navbar = () => {
  return (
    <div className="navbar bg-neutral text-white">
      <div className="container mx-auto">
        <div className="flex-1">
          <NavLink to="/" className="normal-case text-xl">
            FaceIT lunch
          </NavLink>
        </div>

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {
              menuItems.map((item, index) => {
                return (
                  <NavLink
                    key={index}
                    to={item.to}
                    className={`block mr-2 last:m-0`}
                  >
                    {({ isActive }) => {
                      return (
                        <span className={`${isActive ? 'bg-gray-900 font-extrabold' : null} transition uppercase block px-4 py-2 text-sm  hover:text-white focus:text-gray-900 hover:bg-gray-900 focus:bg-gray-200`}>
                          {item.title}
                        </span>
                      )
                    }}
                  </NavLink>
                )
              })
            }
          </ul>
        </div>
      </div>

    </div>
  );
}

export default Navbar;
