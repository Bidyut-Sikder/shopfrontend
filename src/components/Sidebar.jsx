import React from "react";
import {NavLink} from "react-router-dom";

const Sidebar = () => {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3 sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">
              <i className="bi bi-house"></i>
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/create"
              className="nav-link active"
              aria-current="page"
            >
              <i className="bi bi-house"></i>
              Create
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className="nav-link active"
              aria-current="page"
            >
              <i className="bi bi-house"></i>
              About
            </NavLink>
          </li>
       
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
