import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Home from "../pages/Home";
import Counter from "../pages/Counter";
import Contact from "../pages/Contact";

const AppRouter = () => {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Counter" element={<Counter/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
