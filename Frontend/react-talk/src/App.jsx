
import './App.css'
import React from 'react'
import Layout from './components/layout/layout.jsx'
import Navbar from './components/layout/navbar.jsx'
import Test from './components/layout/test.jsx'
import Notification from './components/layout/notification.jsx'


function App() {
  

  return (
    <>


    <Navbar/>
    <Test/>
    <Notification/>
    {/* <Layout/> */}

    
        
  

   
     
    


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