/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const NavBar = () => (
  <nav className="navbar fixed-bottom navbar-expand-sm bg-light">
    <div className="container-fluid">
      <div className="navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Главное
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            Создать
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBar;
