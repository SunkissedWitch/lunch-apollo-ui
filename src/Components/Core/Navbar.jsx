import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LOCAL_STORAGE_TOKEN_NAME, LOCAL_STORAGE_USER } from '../../config';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const menuItems = [
  {
    title: 'Users',
    to: '/users'
  },
  {
    title: 'Orders',
    to: '/orders'
  },
  {
    title: 'Pool',
    to: '/poll'
  },
];

const getInitials = (data) => data?.charAt(0).toUpperCase() || "No data";

const Navbar = () => {
  const navigate = useNavigate();

  const [user, setUser] = useLocalStorage(LOCAL_STORAGE_USER);

  const logOut = () => {
    localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, '');
    setUser(null);

    navigate('/', { replace: true })
  }

  return (
    <div className="navbar bg-primary
    sticky top-0 z-30 flex h-16 w-full bg-opacity-90 backdrop-blur transition-all duration-100 
    bg-base-100 shadow-sm text-white
    ">
      <div className="container mx-auto">
        <div className="flex-none">
          <NavLink to="/" className="btn btn-ghost normal-case text-xl">
            FaceIT lunch
          </NavLink>
        </div>

        <div className="mx-auto">
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

        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="flex cursor-pointer">
              <div className="avatar placeholder" title={user?.username}>
                <div className="font-bold bg-neutral-focus text-neutral-content rounded-full w-12">
                  <span>{getInitials(user?.username)}</span>
                </div>
              </div>
            </label>

            <ul tabIndex={0} className="dropdown-content menu shadow w-52">
              <li>
                <button className="text-black justify-end" onClick={logOut}>
                  Log out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
