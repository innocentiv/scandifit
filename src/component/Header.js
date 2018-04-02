import React from "react";
import logo from "../assets/logo.svg"
import "./Header.css"

const Logo = () =>
    <header className="header">
        <img className="header__logo"src={logo} alt=""></img>
        <h1 className="header__title">Scandifit</h1>
    </header>

export default Logo;
