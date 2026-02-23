import React from "react";

function Navbar() {
  const scrollToTop = (e) => {
    e.preventDefault(); // prevent default anchor behavior
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <h2 className="logo">Alexander Ogheneroro Ariole</h2>

      <div className="nav-links">
        <a href="#home" onClick={scrollToTop}>Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;