
import './App.css'
import React from 'react'
import Layout from './components/layout/layout.jsx'
import Navbar from './components/layout/navbar.jsx'
import Test from './components/layout/test.jsx'
import Notification from './components/layout/notification.jsx'
import Footer from './components/layout/footer.jsx'
import MicController from './components/layout/miccontroller.jsx'
// import ThemeController from './components/layout/themcontroller.jsx'
import ChatBot from './components/layout/chatBot.jsx'
import Home from './components/layout/home.jsx' 
import MyNavbar from './components/layout/bootStrap.jsx'
// import Logo from './components/layout/logo.jsx'
import  {LoginPage , loggedIn}  from './components/layout/login2.jsx'


 import { 
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  
  
  if (isLoggedIn){
    console.log("i am in the jsx");
  }

  return (
    <>


    {/* <Navbar/> */}
    {/* <Test/> */}
    {/* <Notification/> */}
    {/* <ThemeController/> */}
    {/* <Layout/> */}
     {/* <ChatBot/> */}
    
   
   {/* <MyNavbar/> */}

    <Router>
    
      {isLoggedIn && <Navbar />}

      {isLoggedIn && <Notification />}

        <Routes>

          {/* <Route exact path="/" element={<Home/>} /> */}
          <Route exact path="/" element={<Home  logged={isLoggedIn}/>} />
          {/* <Route exact path="/login" element={<LoginPage/>} /> */}

          <Route exact path="/voiceBot" element={<Layout/>} />
          <Route exact path="/chatBot" element={<ChatBot/>} />
          <Route exact path="/login" element={<LoginPage onLoginSuccess={() => setIsLoggedIn(true)} />} />


         

          {/* <Route exact path="/" element={<TextForm heading="Enter text to analyze" mode={mode} />} /> */}
        </Routes>
    

      <Footer/>
    </Router>
    
  </>
  )
}

export default App

//    <div className="relative">
//   {/* Pehle wala div (upar dikhana hai) */}
//   {/* <div className="relative z-10 bg-blue-500 p-4 text-white">
//     Main div (upar)
//   </div> */}

//   {/* Dusra div (piche chhupana hai) */}
//   <div className="absolute inset-0 -z-10 bg-red-500">
//     Background div (piche)
//   </div>
// </div>