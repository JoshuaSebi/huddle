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
      style={{ width: "250px", zIndex: 1050 }}
    >
      <button className="btn btn-secondary mb-3" onClick={toggleSidebar}>
        Close
      </button>
      <ul className="list-unstyled">
        <li>
          <a href="#" className="text-decoration-none">
            Clubs
          </a>
        </li>
        <li>
          <a href="#" className="text-decoration-none">
            Registered Events
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
