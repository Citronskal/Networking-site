import { useState } from "react";
import "./NaviBar.css";

export const NaviBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">Eatgether</div>
        <form onSubmit={handleSearchSubmit} className="search-form">
          <p>Find activities</p>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button type="submit" className="search-form-btn">🔍</button>
        </form>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/activity">Activity</a>
          </li>
          <li>
            <a href="/feed">Feed</a>
          </li>
          <li>
            <a href="/starter">Starter</a>
          </li>
          <li>
            <a href="/testimony">Testimony</a>
          </li>
          <li>
            <a href="">About us</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
