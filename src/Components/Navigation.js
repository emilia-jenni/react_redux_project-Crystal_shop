import React from "react";
import { NavLink } from "react-router-dom";

import "../App.scss";

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/homepage">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/crystals">
              Crystals
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/collections">
              Collections
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/cart">
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
