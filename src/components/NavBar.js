import React from "react";
let hrefLink = "#";

function NavBar({ className }) {
  return (
    <div className="navbar">
      <div className="container flex">
        <h1>Abed | Dev</h1>
        <nav>
          <ul>
            <li>
              <a href={hrefLink}>Home</a>
            </li>
            <li>
              <a href={hrefLink}>contact</a>
            </li>
            <li>
              <a href={hrefLink}>projects</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
