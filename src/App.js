
import './App.css';
//import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./myheading/Layout";
import Home from "./myheading/Home";
import Aboutus from "./myheading/Aboutus";
import Courses from "./myheading/Courses";
import NoPage from "./myheading/NoPage";



function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Aboutus" element={<Aboutus />} />
          <Route path="courses" element={<Courses />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}




export default App;
