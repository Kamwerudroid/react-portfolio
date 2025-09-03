import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>    
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-200 transition-colors duration-500">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-10">About Me</h1>
        <p>I am a software developer with experience in HTML,CSS,Javascript, Nodejs and React</p>
      </div>
    </>
  );
}

export default About;
