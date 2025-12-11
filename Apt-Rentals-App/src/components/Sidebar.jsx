import React from "react";
import dashboardIcon from "../assets/dashboard-icon.svg";
import apartmentsIcon from "../assets/apartments-icon.svg";
import usersIcon from "../assets/users-icon.svg";
import reservationsIcon from "../assets/reservations-icon.svg";
import settingsIcon from "../assets/settings-icon.svg";

const Sidebar = () => {
  return (
    <>
      <div id="container-sidebar">
        <button>
          <img
            className="sidebar-icon"
            src={dashboardIcon}
            alt="dashboard icon"
          />
          Dashboard
        </button>
        <button>
          <img
            className="sidebar-icon"
            src={apartmentsIcon}
            alt="apartments icon"
          />
          Apartments
        </button>
        <button>
          <img className="sidebar-icon" src={usersIcon} alt="users icon" />
          Users
        </button>
        <button>
          <img
            className="sidebar-icon"
            src={reservationsIcon}
            alt="reservations icon"
          />
          Reservations
        </button>
        <button>
          <img
            className="sidebar-icon"
            src={settingsIcon}
            alt="settings icon"
          />
          Settings
        </button>
      </div>
    </>
  );
};

export default Sidebar;
