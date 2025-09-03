import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>      
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-200 transition-colors duration-500">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-10">Home</h1>
        <p>Hi, I'm Maina Kamweru.</p>
        <p>Software Developer</p>
        <p>I am a passionate Software Developer that can build beautiful and functional websites.</p>
      </div>
      
    </>
  );
}

export default Home;
