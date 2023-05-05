import React from "react";
import Logo from "../assets/images/Logo.svg";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="navbar">
            <img src={Logo} alt="Little Lemon logo" className="logo" />
            <ul className="nav-items">
                <li>
                    <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={"/booking"}>Booking</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
