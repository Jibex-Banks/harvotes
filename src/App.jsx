import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React from "react";
import Footer from "./footer";
import './Style.css'
function App() {

  return (
    <div>
    <Navbar/>
    <Footer/>
    </div>
  )
}

export default App;
