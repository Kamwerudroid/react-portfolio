import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-900 text-3xl flex-wrap">
      <nav>
        <h2>Maina Kamweru</h2>
        <ul>
          <li>
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
  );
}

export default Header;
