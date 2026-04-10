import React from "react";
import { NavLink } from "react-router";

/* ei gula Navbar.jsx er sathe connect kora hoyeche*/

const MyNavLink = ({ to, children, className = "" }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `font-semibold pb-2 px-2 transition-all duration-300 
        ${className}
        ${
          isActive
            ? "text-purple-500 border-b-2 border-purple-500 transition-colors duration-300"
            : "text-gray-500 hover:text-purple-400"
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyNavLink;