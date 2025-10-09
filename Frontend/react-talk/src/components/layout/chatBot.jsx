import React from 'react'
import { Plus, Paperclip, Mic } from "lucide-react";
export default function ChatBot() {
  return (

    <>
    

    <div className=" relative inset-0  flex h-170  justify-center">

                {/* Background Video */}
                {/* <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover -z-10"
                >
                    <source src="/images/33194-396036988.mp4" type="video/mp4" />
                </video> */}

                <img
                    className="absolute inset-0 w-full h-full object-cover -z-10"
                    src="/images/banner-background.webp"
                    alt=""
                />


            

                 <div className="flex items-center bg-white dark:bg-gray-800 rounded-2xl shadow-md px-3 py-2 w-[60%] mt-110 h-22 max-w-3xl border border-gray-200 dark:border-gray-700">
      {/* Left icons */}
      <button className="flex items-center justify-center bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full p-2 transition">
        <Plus className="h-5 w-5 text-gray-600 dark:text-gray-300" />
      </button>

      {/* Dropdown */}
      <select className="ml-2 bg-transparent text-sm text-gray-600 dark:text-gray-300 focus:outline-none">
        <option>Quick response</option>
        
      </select>

      {/* Input field */}
      <input
        type="text"
        placeholder="Message Copilot"
        className="flex-1 bg-transparent focus:outline-none px-3 text-gray-700 dark:text-gray-200 text-sm"
      />

      {/* Right icons */}
      <div className="flex items-center gap-3">
        <Paperclip className="h-5 w-5 text-gray-500 dark:text-gray-300 cursor-pointer hover:text-gray-700 dark:hover:text-white" />
        <Mic className="h-5 w-5 text-gray-500 dark:text-gray-300 cursor-pointer hover:text-gray-700 dark:hover:text-white" />
      </div>
    </div>


                
    
    </div>
    </>
  )
}
