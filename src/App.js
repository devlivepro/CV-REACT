import React from "react";
import { Routes, Route } from "react-router-dom";


import Home from './pages/Home';
import Service from './pages/Service';
import Project from './pages/Project';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/service" element={<Service/>}></Route>
        <Route path="/project" element={<Project/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </div>
  )
}

