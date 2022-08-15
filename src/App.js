import React from 'react'
import Banner from './components/Banner'
import "./App.css";
import Navbar from './components/Navbar';
import Sliding from './components/Sliding';

function App() {
  return (
    <div>
      <Banner/>
      <Navbar/>
      <Sliding/>
    </div>
  )
}

export default App