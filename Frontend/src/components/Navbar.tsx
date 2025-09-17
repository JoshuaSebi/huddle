import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import Sidebar from "./Sidebar";
const Navbar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <button
              className="btn btn-outline-secondary me-3 border-0"
              type="button"
              onClick={toggleSidebar}
            >
              ☰
            </button>
            <Link className="navbar-brand fw-bold me-4" to="/">
              huddle
            </Link>
          </div>

          {/*Center Section*/}
          <ul className="navbar-nav mx-auto d-flex flex-row gap-4">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/events" className="nav-link">
                Events
              </NavLink>
            </li>
          </ul>

          {/*Right Section*/}
          <div>
            <img
              src="https://via.placeholder.com/40"
              alt="Account"
              className="rounded-circle"
            />
          </div>
        </div>
      </nav>

      {/*Sidebar and Overlay*/}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {/*sidebar content*/}
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}
    </>
  );
};

export default Navbar;
