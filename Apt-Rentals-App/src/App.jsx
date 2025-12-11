import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Homepage from "./components/Homepage.jsx";
import Footer from "./components/Footer.jsx";
import AptData from "../src/assets/listings.json";
import { useState } from "react";

function App() {
  const [apt, setApt] = useState(AptData.results);

  const handleDeleteApt = (id) => {
    const newList = apt.filter((item) => item.id !== id);
    setApt(newList);
  };

  return (
    <div className="App">
      <div id="primerContainer">
        <nav className="navbar">
          <Navbar />
        </nav>
      </div>
      <div id="segundoContainer">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="homepage">
          <Homepage apt={apt} handleDeleteApt={handleDeleteApt} />
        </div>
      </div>
      <div id="tercerContainer">
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
