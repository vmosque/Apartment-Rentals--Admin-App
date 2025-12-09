import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Homepage from "./components/Homepage.jsx";
import Footer from "./components/Footer.jsx";

function App() {
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
          <Homepage />
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
