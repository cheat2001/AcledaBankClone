import React, { useState } from 'react'
import Banner from './components/Banner'
import "./App.css";
import Navbar from './components/Navbar';
import AcOverlay from './components/AcOverlay';
import Home from './pages/Home';
import Footer from './components/Footer';


function App() {
  const [action,setAction] =useState(true);
  setTimeout(() => {
    setAction(false);
  }, 1000);
  return (
    <div>
       
      <Banner/>
      <Navbar/>
      {action&&<AcOverlay/>}
      <Home/>
      <Footer/>
    </div>
  )
}

export default App