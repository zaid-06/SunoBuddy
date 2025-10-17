// Navbar.jsx
import React, { useState } from 'react'
import Login from './login'
import ContactUs from './contact'
import MicController from './miccontroller.jsx'
 import { useNavigate } from "react-router-dom";

 import { User, Settings, LogOut, Smartphone, MessageCircle } from "lucide-react";
//  import { X, MessageCircle } from "lucide-react";
 

  function Navbar({ onLogout, passtalkMode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const navigate = useNavigate();

  console.log("in navbar, talk mode:", passtalkMode);


  function handleHome(){
    navigate("/");
  }

  function  handelOpenLogin(value){
    setOpenLogin(value);
  }

  function handleIsOpen(value){
    setIsOpen(false)
  }




  return (
    <>
      <div className=" absolute flex  flex-col fixed justify-between items-center h-screen w-[65px] bg-base-200 p-2 z-20 shadow-xl "
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


      

          {/* home icon */}
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
        
          
          <div className="mt-6 ">
            <MicController initial={passtalkMode}  />
          </div>
          
          <div className="dropdown dropdown-top">
            {/* 🔹 Avatar Button */}
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>

            {/* 🔹 Dropdown Menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-xl shadow-lg z-10 mb-3 w-56 p-2"
            >
              {/* Item 1 - Download App */}
              <li>
                <a className="flex items-center gap-2"
                onClick={() => {  alert("We are working on this"); }}
                >
                  <Smartphone className="h-4 w-4 text-gray-600" />
                  Download mobile App
                </a>
              </li>

              {/* Item 2 - Settings */}
              <li>
                <a className="flex items-center gap-2"
                onClick={() => setOpenLogin(true)}>
                  <Settings className="h-4 w-4 text-gray-600" />
                  Settings
                </a>
              </li>

              {/* Item 3 - Contact Us */}
              <li>
                <a className="flex items-center gap-2"
                onClick={() => { setIsOpen(true); }}
                >
                  <MessageCircle className="h-4 w-4 text-gray-600" />
                  Contact us
                </a>
              </li>

              {/* Item 4 - Logout */}
              <li>
                <a onClick={onLogout}
                  className="flex items-center gap-2 text-red-500 hover:bg-red-50">
                  <LogOut className="h-4 w-4" />
                  Log out
                </a>
              </li>

              {/* Item 5 - Login (if not logged in) */}
              {!isLoggedIn && (
                <li>
                  <button
                    onClick={() => setOpenLogin(true)}
                    className="btn btn-primary w-full mt-1"
                  >
                    Login
                  </button>
                </li>
              )}
            </ul>
          </div>

       
        {/* </div> */}
      </div>

      


      {/* Contact Us Modal */}
       

      




      {/* loggin */}
      <Login handleLog={handelOpenLogin } log={openLogin} />

     
      <ContactUs handleOpen={handleIsOpen } open={isOpen} />
    </>
  )
}

export default Navbar
