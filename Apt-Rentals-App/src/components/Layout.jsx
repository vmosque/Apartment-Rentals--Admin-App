import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="App">
      <div id="primerContainer">
        <nav className="navbar">
          <Navbar />
        </nav>
      </div>

      <div id="main-container">
        <div className="sidebar">
          <Sidebar />
        </div>

        <div className="homepage">
          <Outlet />
        </div>
      </div>

      <div id="tercerContainer">
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Layout;
