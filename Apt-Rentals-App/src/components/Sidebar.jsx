import React from "react";
import dashboardIcon from "../assets/dashboard-icon.svg";
import apartmentsIcon from "../assets/apartments-icon.svg";
import usersIcon from "../assets/users-icon.svg";
import reservationsIcon from "../assets/reservations-icon.svg";
import settingsIcon from "../assets/settings-icon.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div id="container-sidebar">
        <Link to="/" className="sidebar-link">
          <button>
            <img
              className="sidebar-icon"
              src={dashboardIcon}
              alt="dashboard icon"
            />
            Dashboard
          </button>
        </Link>

        <Link to="/apartments" className="sidebar-link">
          <button>
            <img
              className="sidebar-icon"
              src={apartmentsIcon}
              alt="apartments icon"
            />
            Apartments
          </button>
        </Link>

        <Link to="/users" className="sidebar-link">
          <button>
            <img className="sidebar-icon" src={usersIcon} alt="users icon" />
            Users
          </button>
        </Link>

        <Link to="/reservations" className="sidebar-link">
          <button>
            <img
              className="sidebar-icon"
              src={reservationsIcon}
              alt="reservations icon"
            />
            Reservations
          </button>
        </Link>

        <Link to="/settings" className="sidebar-link">
          <button>
            <img
              className="sidebar-icon"
              src={settingsIcon}
              alt="settings icon"
            />
            Settings
          </button>
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
