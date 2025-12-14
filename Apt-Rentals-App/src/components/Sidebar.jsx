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
          <img
            className="sidebar-icon"
            src={dashboardIcon}
            alt="dashboard icon"
          />
          Dashboard
        </Link>

        <Link to="/apartments" className="sidebar-link">
          <img
            className="sidebar-icon"
            src={apartmentsIcon}
            alt="apartments icon"
          />
          Apartments
        </Link>

        <Link to="/users" className="sidebar-link">
          <img className="sidebar-icon" src={usersIcon} alt="users icon" />
          Users
        </Link>

        <Link to="/reservations" className="sidebar-link">
          <img
            className="sidebar-icon"
            src={reservationsIcon}
            alt="reservations icon"
          />
          Reservations
        </Link>

        <Link to="/settings" className="sidebar-link">
          <img
            className="sidebar-icon"
            src={settingsIcon}
            alt="settings icon"
          />
          Settings
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
