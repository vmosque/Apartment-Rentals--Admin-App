import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="App">
      <Navbar />

      <div id="main-container">
        <Sidebar />

        <div className="homepage">
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
