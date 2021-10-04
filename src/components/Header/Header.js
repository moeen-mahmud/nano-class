import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-around items-center py-8 mb-6">
      <div>
        <NavLink to="/" className="text-4xl font-bold text-indigo-600">
          Nano Class
        </NavLink>
      </div>
      <div>
        <NavLink
          className="text-xl mr-8"
          activeClassName="px-6 py-2 rounded bg-indigo-600 text-white"
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className="text-xl mr-8"
          activeClassName="px-6 py-2 rounded bg-indigo-600 text-white"
          to="/classes"
        >
          Classes
        </NavLink>
        <NavLink
          className="text-xl mr-8"
          activeClassName="px-6 py-2 rounded bg-indigo-600 text-white"
          to="/instructors"
        >
          Instructors
        </NavLink>
        <NavLink
          className="text-xl mr-8"
          activeClassName="px-6 py-2 rounded bg-indigo-600 text-white"
          to="/about-us"
        >
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
