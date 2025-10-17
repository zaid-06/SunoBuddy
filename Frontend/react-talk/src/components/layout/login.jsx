import React, { useState, useRef , useEffect} from "react";
import { X, Settings, User, Database, FileText, Pencil,HelpCircle   } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login({ handleLog, log , itemIndex}) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const [activeIndex, setActiveIndex] = useState(itemIndex);
  
  const navigate = useNavigate();
    useEffect(() => {
        setActiveIndex(itemIndex);
    }, [itemIndex]);
  // 🧑 Profile image state
  const [profileImage, setProfileImage] = useState(
    "https://via.placeholder.com/100"
  );
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleEditClick = () => {
    fileInputRef.current.click();
  };

  const items = [
   
    { label: "Profile", icon: <User className="h-4 w-4" /> },
    { label: "General", icon: <Settings className="h-4 w-4" /> },
    { label: "Help", icon: <HelpCircle  className="h-4 w-4" /> },
    { label: "About", icon: <FileText className="h-4 w-4" /> },
  ];


  function handleItem(index) {
    setActiveIndex(index);
    if (index === 3) {
      navigate("/about");
      setActiveIndex(0);
      handleLog(false, 0);
      
    }
  }

  return (
    <div>
      {log && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div
            className="flex bg-base-100 p-3 rounded-3xl shadow-lg 
            max-h-[90vh] max-w-[90vw] 
            w-full sm:w-[800px] sm:h-[500px]
            overflow-y-auto"
          >
            {/* 🟡 Main Layout */}
            <div className="bg-white h-full w-full flex-shrink-0 flex flex-col">
              {/* 🔹 Header */}
              <div className="bg-white relative h-[40px] flex font-semibold justify-between">
                <h2 className="ml-6 text-xl font-bold mb-4">Settings</h2>
                <button
                  className="absolute top-1 right-1 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-100 border border-gray-200 transition"
                  aria-label="Close"
                  onClick={() => {
                    handleLog(false);
                    setActiveIndex(0);
                  }}
                >
                  <X className="h-4 w-4 text-gray-600" />
                </button>
              </div>

              {/* 🔸 Content */}
              <div className="flex h-full">
                {/* Sidebar */}
                <div className="bg-white flex-1 w-200 overflow-y-auto p-2 rounded-lg">
                  <div className="flex flex-col gap-1">
                    {items.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => handleItem(index)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all
                        ${
                          activeIndex === index
                            ? "bg-gray-100 text-gray-700"
                            : "hover:bg-gray-100 text-gray-700"
                        }`}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 🧩 Right Panel */}
                <div className="bg-white flex-3 p-2 w-full mx-auto overflow-y-auto max-h-[420px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">

                  {/* ⚙️ General / Theme */}
                  {activeIndex === 1 && (
                    <div>
                      <h2 className="text-gray-700 font-semibold mb-2">
                        Theme
                      </h2>
                      <div className="flex gap-3">
                        <button
                          onClick={() => setTheme("light")}
                          className={`flex-1 border rounded-xl py-3 flex flex-col items-center ${
                            theme === "light"
                              ? "bg-gray-100"
                              : "hover:bg-gray-50"
                          }`}
                        >
                          <span className="text-xl">☀️</span>
                          <span className="text-sm mt-1 text-gray-700">
                            Light
                          </span>
                        </button>

                        <button
                          onClick={() => setTheme("dark")}
                          className={`flex-1 border rounded-xl py-3 flex flex-col items-center ${
                            theme === "dark"
                              ? "bg-gray-100"
                              : "hover:bg-gray-50"
                          }`}
                        >
                          <span className="text-xl">🌙</span>
                          <span className="text-sm mt-1 text-gray-700">
                            Dark
                          </span>
                        </button>

                        <button
                          onClick={() => setTheme("system")}
                          className={`flex-1 border rounded-xl py-3 flex flex-col items-center ${
                            theme === "system"
                              ? "bg-gray-100"
                              : "hover:bg-gray-50"
                          }`}
                        >
                          <span className="text-xl">💻</span>
                          <span className="text-sm mt-1 text-gray-700">
                            System
                          </span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* 👤 Profile Section */}
                  {activeIndex === 0 && (
                    <div className="bg-white dark:bg-gray-900  flex-3  w-full mx-auto  ">
                      <div className="space-y-3">
                        {/* 🧑 Profile Image */}
                        <div className="flex flex-col items-center pb-4 border-b border-gray-200 relative">
                          <div className="relative w-24 h-24">
                            <img
                              src={profileImage}
                              alt="Profile"
                              className="w-24 h-24 rounded-full object-cover border-4 border-gray-200 dark:border-gray-700"
                            />

                            {/* ✏️ Edit icon */}
                            <button
                              onClick={handleEditClick}
                              className="absolute bottom-1 right-1 bg-white dark:bg-gray-800 p-1.5 rounded-full shadow-md border border-gray-300 hover:bg-gray-100 transition"
                            >
                              <Pencil className="w-4 h-4 text-gray-600" />
                            </button>

                            {/* Hidden file input */}
                            <input
                              type="file"
                              accept="image/*"
                              ref={fileInputRef}
                              onChange={handleImageChange}
                              className="hidden"
                            />
                          </div>

                          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-3">MD Zaid</h3>
                          <p className="text-gray-500 text-sm">Your profile information</p>
                        </div>

                        {/* Info Fields */}
                        <div className="flex justify-between items-center pb-3 ">
                          <span className="text-gray-700 font-medium">Name</span>
                          <div className="flex items-center gap-2">
                            <span className="text-gray-900 font-semibold">
                              MD Zaid
                            </span>
                            <img
                              src="https://www.svgrepo.com/show/475656/google-color.svg"
                              alt="Google"
                              className="w-5 h-5"
                            />
                          </div>
                        </div>

                        <div className="flex justify-between items-center pb-3 ">
                          <span className="text-gray-700 font-medium">Email address</span>
                          <span className="text-gray-900 font-semibold">mdz*****49@gmail.com</span>
                        </div>

                        <div className="flex justify-between items-center pb-3 ">
                          <span className="text-gray-700 font-medium">Phone number</span>
                          <span className="text-gray-400 font-semibold">-</span>
                        </div>

                        <div className="flex justify-between items-center pb-3 ">
                          <span className="text-gray-700 font-medium">Log out of all devices</span>
                          <button className="px-4 py-1.5 text-red-500 border border-red-400 rounded-full hover:bg-red-50 transition">
                            Log out
                          </button>
                        </div>

                        <div className="flex justify-between items-center pb-3">
                          <span className="text-gray-700 font-medium">Delete account</span>
                          <button className="px-4 py-1.5 text-red-500 border border-red-400 rounded-full hover:bg-red-50 transition">Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
