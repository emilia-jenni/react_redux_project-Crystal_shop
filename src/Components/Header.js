import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Navigation from "./Navigation";
import "../App.scss";
import logo from "../images/obsidian beauty.svg";

const Header = () => {
  const cartItemCount = useSelector((state) =>
    state.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0)
  );
  return (
    <header>
      <Link to="/" exact>
        <img className="logo" src={logo} alt="logo" />
      </Link>

      <Navigation cartItemCount={cartItemCount} />
    </header>
  );
};

export default Header;
