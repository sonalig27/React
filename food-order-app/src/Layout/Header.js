import React from "react";
import classes from "./Header.module.css";
import appLogo from "../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Meal To Go</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={appLogo} alt="App Logo" />
      </div>
    </React.Fragment>
  );
};

export default Header;
