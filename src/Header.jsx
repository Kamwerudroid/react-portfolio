import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
    <header className="bg-blue-900 dark:bg-gray-950 text-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center flex-wrap">
        <h2 className="text-3xl font-bold mb-4 md:mb-0">Maina Kamweru</h2>
        <ul className="flex flex-wrap justify-center md:space-x-8 space-x-4 text-lg">
          <li >
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
    </header>
    </div>
  );
}

export default Header;
