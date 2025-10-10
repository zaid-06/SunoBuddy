// Navbar.jsx
import React, { useState } from 'react'
import Login from './login'
import MicController from './miccontroller.jsx'
 import { useNavigate } from "react-router-dom";
 

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
   const navigate = useNavigate();


  function handleHome(){
    navigate("/");
  }

  return (
    <>
      <div className=" absolute flex  flex-col fixed justify-between items-center h-screen w-[75px] bg-base-200 p-2 z-20 shadow-xl "
       style={{
         
          // transition: "width 0.3s",
          borderRadius: "0 10px 10px 0",
        }}
      >

        {/* Drawer Button at Top */}
        <div className="drawer mt-4  flex flex-col gap-4 text-center" >
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
          <div className=" drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              <li><a>Sidebar Item 1</a></li>
              <li><a>Sidebar Item 2</a></li>
            </ul>
          </div>


      


        <div className="drawer-content" onClick={handleHome}>
            <label className="btn btn-ghost btn-circle">
                      <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
            >
            <path d="M2.25 12l9.4-7.85a1 1 0 0 1 1.3 0L22.25 12a.75.75 0 0 1-.5 1.3H20v8a1 1 0 0 1-1 1h-5.25v-5.25h-3.5V22H5a1 1 0 0 1-1-1v-8H2.75a.75.75 0 0 1-.5-1.3z" />
          </svg>
            </label>
        </div>

        

        </div>


        {/* home icon */}
        {/* 🏠 Home Icon Button */}
       




       

        {/* 🔽 Mic Controller (just above profile avatar) */}
        <div className="mt-6 ">
          <MicController />
        </div>

        {/* Profile Dropdown at Bottom */}
        <div className="mb-6 flex-col gap-5 flex items-center">

          




          <button type="button" className="btn  text-black hover:bg-gray-200 btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"></path>
                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"></path>
              </svg>
          </button>


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
