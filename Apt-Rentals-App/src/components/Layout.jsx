import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const isSignInPage = location.pathname === "/signin";

  return (
    <div className="app-layout">
      {!isSignInPage && <Sidebar />}

      <div className="app-content">
        <Navbar />
        <main className="homepage">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
