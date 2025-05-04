import React from "react";
import "./header.css"; // Optional: For styling

function Header({ scrollToRef }) {
  return (
    <header className="navbar">
      <nav>
        <ul>
          <li onClick={() => scrollToRef("home")}>Home</li>
          <li onClick={() => scrollToRef("about")}>About</li>
          <li onClick={() => scrollToRef("mission")}>Mission & Vision</li>
          <li onClick={() => scrollToRef("projects")}>Projects</li>
          <li onClick={() => scrollToRef("contact")}>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
