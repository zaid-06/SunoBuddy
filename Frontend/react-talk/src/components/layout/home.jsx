import React from "react";
import * as LoginComponents from './login2.jsx';

import { Share } from "lucide-react";


function Home(props) {

  // () => window.location.href = '/login'

  console.log("in home page: ", props.logged);

  function handleLogin() {
      window.location.href = '/login';
    
  }


  function handleVoice() {

    if (props.logged) {
      
      window.location.href = '/voiceBot';
    }else{
      window.location.href = '/login';
    }

  }


  function handleChat(){
    if (props.logged) {
      window.location.href = '/chatBot';
    }else{
      window.location.href = '/login';
    }
  }



  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-6 bg-gradient-to-b from-blue-50 via-indigo-50 to-purple-100 z-10">
      
      {/* 🌌 Animated Gradient Background (behind everything) */}
      <div className="absolute inset-0 z-[-10] bg-gradient-to-b from-transparent via-blue-200/50 to-indigo-400/80 bg-[length:200%_200%] animate-gradient-move"></div>

      {/* 🌟 Floating Glowing Orbs (behind content) */}
      <div className="absolute -top-40 left-20 w-80 h-80 bg-blue-400/30 rounded-full blur-3xl animate-float-slow z-[-10]"></div>
      <div className="absolute top-60 -right-40 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-float-medium z-[-10]"></div>
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-pink-300/20 rounded-full blur-3xl animate-float-fast z-[-10]"></div>

      {/* 🚀 Info Bar */}
      <p className="z-10 text-sm text-gray-700 mb-6 flex items-center gap-2 bg-white/50 px-4 py-2 rounded-full shadow-sm backdrop-blur-md">
        🚀 <span>Improve your English with my AI Agents.</span>

      </p>

      {/* 💫 Logo / Title */}
      <h1 className="z-10 text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 drop-shadow-lg mb-3">
        HelloBuddy
      </h1>
      <p className="z-10 text-xl text-gray-700 font-medium mb-14 tracking-wide">
        Dive into the Future of Intelligence

      </p>

      {/* 💎 Cards Section */}
      <div
       className="z-10 flex flex-col md:flex-row gap-10">

        {/* Card 1 */}
        {
          !props.logged && (
              <a
          onClick={handleLogin}
          href="#"
          
          className="group bg-white/50 backdrop-blur-lg hover:bg-white/70 active:scale-95 shadow-lg hover:shadow-xl rounded-2xl px-8 py-8 w-[280px] transition-transform duration-150 hover:-translate-y-2 border border-white/20 cursor-pointer"
        >
          <h3 className="text-blue-700 font-semibold text-lg mb-3 group-hover:text-blue-800">
            Login Free now
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900">
            Get free access to DeepSeek-V3.2. <br />
            Experience next-level AI performance.
          </p>
        </a>
            )}
        

        {/* Card 2 */}
        <a
          onClick={handleVoice}
          href="#"
          className="group bg-white/50 backdrop-blur-lg hover:bg-white/70 active:scale-95 shadow-lg hover:shadow-xl rounded-2xl px-8 py-8 w-[280px] transition-transform duration-150 hover:-translate-y-2 border border-white/20 cursor-pointer"
        >
          <h3 className="text-blue-700 font-semibold text-lg mb-3 group-hover:text-blue-800">
            Start Speaking
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900">
            You will Speak with a real AI Avtar. <br />
            Speak, Improve your communication, and innovate anywhere. 
          </p>
        </a>

        {/* Card 3 */}
        <a
        onClick={handleChat}
          href="#"
          className="group bg-white/50 backdrop-blur-lg hover:bg-white/70 active:scale-95 shadow-lg hover:shadow-xl rounded-2xl px-8 py-8 w-[280px] transition-transform duration-150 hover:-translate-y-2 border border-white/20 cursor-pointer"
        >
          <h3 className="text-blue-700 font-semibold text-lg mb-3 group-hover:text-blue-800">
            Start Chating
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900">
            Integrate DeepSeek into your projects. <br />
            Build the future with intelligence.
          </p>
        </a>
      </div>

      {/* 🌐 Top Right Menu */}
      <div className="absolute top-6 right-18 flex items-center gap-6 text-gray-600 text-sm z-10">
         <a
          href="#"
          className="flex items-center gap-2 hover:text-blue-600 right-18 transition-colors duration-200"
        >
          <Share className="w-4 h-4" />
          <span>Share</span>
        </a>
        
      </div>

      {/* 🌀 Custom Animations */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 100%; }
          50% { background-position: 100% 0%; }
          100% { background-position: 0% 100%; }
        }
        .animate-gradient-move {
          animation: gradientMove 12s ease-in-out infinite;
        }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(20px); }
        }
        @keyframes floatMedium {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(25px) translateX(-25px); }
        }
        @keyframes floatFast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }

        .animate-float-slow { animation: floatSlow 12s ease-in-out infinite; }
        .animate-float-medium { animation: floatMedium 9s ease-in-out infinite; }
        .animate-float-fast { animation: floatFast 6s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

export default Home;
