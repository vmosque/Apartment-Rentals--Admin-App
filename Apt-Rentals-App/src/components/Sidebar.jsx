import React from "react";
import dashboardIcon from "../assets/dashboard-icon.svg";
import apartmentsIcon from "../assets/apartments-icon.svg";
import usersIcon from "../assets/users-icon.svg";
import reservationsIcon from "../assets/reservations-icon.svg";
import settingsIcon from "../assets/settings-icon.svg";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div id="container-sidebar">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <img
            className="sidebar-icon"
            src={dashboardIcon}
            alt="dashboard icon"
          />
          Dashboard
        </NavLink>

        <NavLink
          to="/apartments"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <img
            className="sidebar-icon"
            src={apartmentsIcon}
            alt="apartments icon"
          />
          Apartments
        </NavLink>

        <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <img className="sidebar-icon" src={usersIcon} alt="users icon" />
          Users
        </NavLink>

        <NavLink
          to="/reservations"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <img
            className="sidebar-icon"
            src={reservationsIcon}
            alt="reservations icon"
          />
          Reservations
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <img
            className="sidebar-icon"
            src={settingsIcon}
            alt="settings icon"
          />
          Settings
        </NavLink>
      </div>
    </>
  );
};

export default Sidebar;
