import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import "./App.css";

import Dashboard from "./pages/Dashboard.jsx";
import AptData from "../src/assets/listings.json";
import Apartments from "../src/pages/Apartments.jsx";
import Layout from "./components/Layout";
import Users from "./pages/Users.jsx";

function App() {
  const [apt, setApt] = useState(AptData.results);

  const handleDeleteApt = (idToDelete) => {
    setApt((prevApt) => prevApt.filter((apt) => apt.id !== idToDelete));
  };

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={<Dashboard apt={apt} handleDeleteApt={handleDeleteApt} />}
          />
          <Route
            path="/apartments"
            element={<Apartments apt={apt} handleDeleteApt={handleDeleteApt} />}
          />
          <Route
            path="/users"
            element={<Users apt={apt} handleDeleteApt={handleDeleteApt} />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
