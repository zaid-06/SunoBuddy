import { useState } from "react";
// import Navbar from "./navbar"

function Test() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [openLogin, setOpenLogin] = useState(false); // modal state

    return (
        <>

            <div className=" inset-0  -z-10  flex    flex h-200  bg-slate-300 justify-center">

                <div className="relative absolute left-1/2 transform -translate-x-1/2  border-3 border-gray-500 flex mt-5 mb-2 shadow-lg rounded-lg h-142 w-[450px] bg-cyan-100 items-center justify-center">
  
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

                <div className="flex flex-col mt-4 gap-2 items-end ml-auto ">

                        <div className="flex  flex-row drawer-content mr-17 gap-2  ">
                        
                            <div className=" shadow-lg    right-17">
                                    <select defaultValue="Gender" className="select select-accent w-26 ">
                                        <option disabled={true}>Talk to</option>
                                        <option>Men</option>
                                        <option>Women</option>
                                    </select>
               
                            </div>
                    

                        </div>


                        <div className="card  right-3 bg-base-100   w-40 shadow-sm">
                            <figure >
                                <img className="h-35"
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                            </figure>
                            <h2 className="card-title  ">Angena</h2>
                                
                            
                        </div>
                        <div className="card  right-3 bg-base-100   w-40 shadow-sm">
                            <figure >
                                <img className="h-35"
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                            </figure>
                            <h2 className="card-title  ">John</h2>
                        </div>
                        <div className="card  right-3 bg-base-100  w-40 shadow-sm">
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

export default Test;
