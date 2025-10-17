import React , { useState } from 'react'
import { X } from "lucide-react";
import { Settings, User, Database, FileText } from "lucide-react";
 import { useNavigate } from "react-router-dom";

export default function Login({handleLog, log }) {

    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(0);  
    const items = [
    { label: "General", icon: <Settings className="h-4 w-4" /> },
    { label: "Profile", icon: <User className="h-4 w-4" /> },
    { label: "Data", icon: <Database className="h-4 w-4" /> },
    { label: "About", icon: <FileText className="h-4 w-4" /> },
  ];

  function handleItem(index) {

    setActiveIndex(index);
    if (index === 3) {
       
        navigate("/about");
        setActiveIndex(0);
        handleLog(false);
        

    }
  }





  return (
    <div>
        {
            log && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="flex bg-base-100 p-3 rounded-3xl shadow-lg 
                    max-h-[90vh] max-w-[90vw] 
                    w-full sm:w-[800px] sm:h-[500px]
                    overflow-y-auto">


                        {/* 🟡 Left Sidebar */}
        

                        <div className="bg-while h-full w-full flex-shrink-0 flex flex-col">
                        {/* 🔹 Heading Section (1 inch height ≈ 96px) */}
                            <div className="bg-white relative h-[40px] flex font-semibold justify-between">
                                <h2 className="ml-6 text-xl font-bold mb-4">Settings</h2>

                                <button
                                className="absolute top-1 right-1 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-100 border border-gray-200 transition"
                                aria-label="Close"
                                onClick={() => {
                                handleLog(false);
                                setActiveIndex(0); // ✅ reset to "General"
                                }}

                                >
                                <X className="h-4 w-4 text-gray-600" />
                                </button>
                            </div>

                            {/* 🔸 Scrollable Content Section */}
                            <div className='flex h-full'>

                            
                               <div className="bg-white flex-1 w-200 overflow-y-auto p-2 rounded-lg">
                                    <div className="flex flex-col gap-1">
                                        {items.map((item, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleItem(index)} // ✅ set active
                                            className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all
                                            ${
                                                activeIndex === index
                                                ? "bg-gray-100 text-gray-700" // ✅ active style
                                                : "hover:bg-gray-100 text-gray-700"
                                            }`}
                                        >
                                            {item.icon}
                                            <span>{item.label}</span>
                                        </button>
                                        ))}
                                    </div>
                                </div>


                                <div className="bg-white  flex-3  p-6 w-full  mx-auto">
                                {/* Theme Section */}
                                <div>
                                    <h2 className="text-gray-700 font-semibold mb-2">Theme</h2>
                                    <div className="flex gap-3">
                                    <button className="flex-1 border rounded-xl py-3 flex flex-col items-center hover:bg-gray-50">
                                        <span className="text-xl">☀️</span>
                                        <span className="text-sm mt-1 text-gray-700">Light</span>
                                    </button>

                                    <button className="flex-1 border rounded-xl py-3 flex flex-col items-center hover:bg-gray-50">
                                        <span className="text-xl">🌙</span>
                                        <span className="text-sm mt-1 text-gray-700">Dark</span>
                                    </button>

                                    <button className="flex-1 border rounded-xl py-3 flex flex-col items-center bg-gray-100">
                                        <span className="text-xl">💻</span>
                                        <span className="text-sm mt-1 text-gray-700">System</span>
                                    </button>
                                    </div>
                                </div>

                                
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
      
    </div>
  )
}






