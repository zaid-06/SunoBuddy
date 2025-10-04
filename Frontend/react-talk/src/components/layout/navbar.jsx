// Navbar.jsx
import React, { useState } from 'react'
import Login from './login'
import MicController from './miccontroller.jsx'

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <>
      <div className="flex flex-col fixed justify-between items-center h-screen w-[75px] bg-base-200 p-2">

        {/* Drawer Button at Top */}
        <div className="drawer mt-4">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </label>
          </div>

          {/* Sidebar Drawer */}
          <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              <li><a>Sidebar Item 1</a></li>
              <li><a>Sidebar Item 2</a></li>
            </ul>
          </div>
        </div>

        {/* 🔽 Mic Controller (just above profile avatar) */}
        <div className="mt-6 ">
          <MicController />
        </div>

        {/* Profile Dropdown at Bottom */}
        <div className="mb-6">
          <div className="dropdown dropdown-top">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mb-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a className='{ThemeController}'>Theme</a></li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>

              {/* Show Login only if not logged in */}
              {!isLoggedIn && (
                <li>
                  <button
                    onClick={() => setOpenLogin(true)}
                    className="btn btn-primary w-full"
                  >
                    Login
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      <Login log={openLogin} />
    </>
  )
}

export default Navbar
