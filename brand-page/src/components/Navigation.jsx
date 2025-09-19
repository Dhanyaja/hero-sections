import React from "react";
import '../App.css'


const Navigation = () => {
  return (
    <nav className="container">
      <div>
        <img src="/images/brand_logo.png" alt="" />
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">Contact</li>
        <li href="#">About</li>
      </ul>

      <button>login</button>
    </nav>
  );
};

export default Navigation;
