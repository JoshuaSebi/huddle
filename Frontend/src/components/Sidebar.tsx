import React from "react";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`sidebar bg-light position-fixed top-0 start-0 vh-100 p-3 ${
        isOpen ? "d-block" : "d-none"
      }`}
      style={{ width: "300px", zIndex: 1050 }}
    >
      <button className="btn btn-secondary mb-4 w-100" onClick={toggleSidebar}>
        Close
      </button>

      <ul className="list-unstyled">
        <li
          className="mb-3 p-3 border rounded"
          style={{ backgroundColor: "#f8f9fa" }}
        >
          <a href="#" className="text-decoration-none text-dark fw-bold">
            Clubs
          </a>
        </li>
        <li
          className="mb-3 p-3 border rounded"
          style={{ backgroundColor: "#f8f9fa" }}
        >
          <a href="#" className="text-decoration-none text-dark fw-bold">
            Registered Events
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
