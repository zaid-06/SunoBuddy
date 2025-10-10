import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { FcGoogle } from "react-icons/fc"; // ✅ for Google logo icon
import { useNavigate } from "react-router-dom";
 


let loggedIn = false;
export function LoginPage({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const navigate = useNavigate();
  



  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   console.log("Email:", email, "Password:", password);
    
    
  // };



  const handleLogin = async (e) => {
  e.preventDefault();
  

  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
     
      localStorage.setItem("token", data.token);
      onLoginSuccess(); 
      navigate("/");
      
    } else {
      alert(data.message);
      
    }
  } catch (error) {
    console.error("❌ Login error:", error);
    alert("Something went wrong!");
  }
};


  const handleGoogleLogin = () => {
    console.log("Login with Google clicked"); 
    
    
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center from-indigo-500 via-purple-500 to-pink-500 p-6 relative">
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src="/images/banner-background.webp"
        alt=""
      />

      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Welcome Back 👋
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-400">
              <Mail className="text-gray-400 mr-2" size={20} />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-400">
              <Lock className="text-gray-400 mr-2" size={20} />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Normal Login Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Login
          </button>

          {/* OR Divider */}
          <div className="flex items-center justify-center my-4">
            <div className="h-px bg-gray-300 w-1/3"></div>
            <span className="text-gray-500 text-sm mx-2">OR</span>
            <div className="h-px bg-gray-300 w-1/3"></div>
          </div>

          {/* Google Login Button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 rounded-lg shadow-sm transition duration-300 ease-in-out"
          >
            <FcGoogle className="mr-2 text-xl" />
            Login with Google
          </button>

          {/* Forgot Password / Register */}
          <div className="text-center text-sm text-gray-600 mt-4">
            <a href="#" className="hover:text-indigo-600">
              Forgot Password?
            </a>
            <span className="mx-2">•</span>
            <a href="#" className="hover:text-indigo-600">
              Create Account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}





export { loggedIn }
