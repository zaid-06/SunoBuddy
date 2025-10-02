import { useState } from "react";
// import Navbar from "./navbar"

function Layout() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [openLogin, setOpenLogin] = useState(false); // modal state

    return (
        <>

            <div className="flex  bg-slate-200 justify-between ">


          
                 <div className=" flex    flex-col justify-between items-center h-screen w-[75px] bg-base-200  p-2 shadow-md">

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


                
                {/* <div className="flex w-[940px] justify-between "> */}
                {/* <div className="bg-green-200  w-full md:w-2/4  ml-auto flex  justify-between "> */}

                {/* <div className=" border-3 border-gray-500 flex mt-5 mb-2 shadow-lg  rounded-lg   h-142 w-[450px] inset-0    bg-cyan-100 items-center justify-center ">

                        <img className="h-140"src="../public/images/bohemian-man-with-his-arms-crossed.jpg" alt="" 
                        />
                        <div className="bg-base-100 p-6 ml-30 mr-30 mt-120 mb-7 rounded-lg shadow-lg w-96 h-15 flex items-center justify-center">
                             <span className="font-bold text-xl">START</span>
                              </div>

                                
                </div> */}

                <div className="relative border-3 border-gray-500 flex mt-5 mb-2 shadow-lg rounded-lg h-142 w-[450px] bg-cyan-100 items-center justify-center">
  
                {/* Image */}
                    <img
                        className="h-140 w-full object-cover rounded-lg"
                        src="../public/images/bohemian-man-with-his-arms-crossed.jpg"
                        alt=""
                    />

                {/* START Box Overlay */}
                    <div className="absolute top-120 left-1/2 transform -translate-x-1/2 bg-base-100 p-3 rounded-lg shadow-lg w-40 flex items-center justify-center">
                        <span className="font-bold text-xl">START</span>
                    </div>

                </div>


                     


                    
                    

            

                <div className="flex flex-col ">

                        <div className="flex  flex-row drawer-content">
                        

                       
                            <div className=" shadow-lg  fixed top-4 right-17">
                                    <select
                                        defaultValue="Gender"
                                        className="select select-accent w-26 "
                                    >
                                        <option disabled={true}>Talk to</option>
                                        <option>Men</option>
                                        <option>Women</option>
                                    </select>
                                    
                                {/* <button
                                    onClick={() => setOpenLogin(true)}
                                    className="btn btn-primary w-full"
                                >
                                    Login
                                </button> */}
                                        

                            </div>
                        


                            <div className="drawer drawer-end  w-[75px] ">
                            {/* Drawer toggle input */}

                                <input id="notification-drawer" type="checkbox" className="drawer-toggle" />

                                {/* Page Content */}
                                <div className="drawer-content">
                                    {/* Bell Icon at top-right triggers drawer */}
                                    <label htmlFor="notification-drawer" className="btn btn-ghost btn-circle bg-cyan-100 shadow-lg fixed top-4 right-4 z-50">
                                        <div className="indicator">
                                            {/* Bell Icon */}
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                            </svg>

                                            {/* Badge */}
                                            <span className="badge badge-sm badge-primary indicator-item">3</span>
                                        </div>
                                    </label>
                                </div>

                                {/* Drawer Side (Right) */}
                                <div className="drawer-side">
                                    <label htmlFor="notification-drawer" className="drawer-overlay"></label>
                                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                                        <li><a>Notification 1</a></li>
                                        <li><a>Notification 2</a></li>
                                        <li><a>Notification 3</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>


                        <div className="card top-18 right-3 bg-base-100 fixed  w-40 shadow-sm">
                            <figure >
                                <img className="h-35"
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                            </figure>
                            
                                <h2 className="card-title  ">Angena</h2>
                                
                            
                        </div>
                        <div className="card top-62 right-3 bg-base-100 fixed  w-40 shadow-sm">
                            <figure >
                                <img className="h-35"
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                            </figure>
                            
                                <h2 className="card-title  ">John</h2>
                                
                            
                        </div>
                        <div className="card top-106 right-3 bg-base-100 fixed  w-40 shadow-sm">
                            <figure >
                                <img className="h-35"
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                            </figure>
                            
                                <h2 className="card-title  ">Ahmad</h2>
                                
                            
                        </div>




                    
                </div>
                {/* </div> */}

                

          
            </div>


            {/* Login Modal */}
            {openLogin && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-base-100 p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-bold mb-4">Login</h2>

                        <input
                            type="text"
                            placeholder="Username"
                            className="input input-bordered w-full mb-3"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="input input-bordered w-full mb-3"
                        />

                        <div className="flex justify-between">
                            <button
                                className="btn btn-primary"
                                onClick={() => {
                                    setIsLoggedIn(true);
                                    setOpenLogin(false); // close modal after login
                                }}
                            >
                                Login
                            </button>
                            <button
                                className="btn"
                                onClick={() => setOpenLogin(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
           
        </>
    );
}

export default Layout;
