import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import Sidebar from "./Sidebar";

const Navbar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setMenuOpen(false);
    navigate("/login");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setMenuOpen(false);
    console.log("Logged out");
  };

  const handleProfile = () => {
    setMenuOpen(false);
    navigate("/profile");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">
        <div className="container-fluid">
          {/* Left Section */}
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

          {/* Center Section */}
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

          {/* Right Section*/}
          <div className="position-relative" ref={menuRef}>
            <img
              src="https://via.placeholder.com/40"
              alt="Account"
              className="rounded-circle"
              style={{ cursor: "pointer" }}
              onClick={() => setMenuOpen(!menuOpen)}
            />

            {menuOpen && (
              <div
                className="dropdown-menu show mt-2"
                style={{ position: "absolute", right: 0 }}
              >
                {!isLoggedIn ? (
                  <button className="dropdown-item" onClick={handleLogin}>
                    Login
                  </button>
                ) : (
                  <>
                    <button className="dropdown-item" onClick={handleProfile}>
                      Profile
                    </button>
                    <button className="dropdown-item" onClick={handleLogout}>
                      Logout
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Sidebar and Overlay */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}
    </>
  );
};

export default Navbar;
