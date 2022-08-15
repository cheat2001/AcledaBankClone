import React, { useState } from 'react'
import Banner from './components/Banner'
import "./App.css";
import Navbar from './components/Navbar';
import Sliding from './components/Sliding';
import AcOverlay from './components/AcOverlay';
function App() {
  const [action,setAction] =useState(true);
  setTimeout(() => {
    setAction(false);
  }, 1000);
  return (
    <div>
       
      <Banner/>
      <Navbar/>
      <Sliding/>
      {action&&<AcOverlay/>}
    </div>
  )
}

export default App