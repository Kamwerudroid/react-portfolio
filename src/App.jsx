import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Contacts from "./Contacts";
import Projects from "./Projects";
import {createContext, useState, useEffect, useContext} from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
