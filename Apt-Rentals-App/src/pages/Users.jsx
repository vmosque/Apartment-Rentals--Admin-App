import React from "react";
import Layout from "../components/Layout";
import ApartmentsList from "../components/ApartmentsList";

const Users = ({ apt, handleDeleteApt }) => {
  return (
    <>
      <h1>usuarios</h1>
      <ApartmentsList apt={apt.slice(0, 5)} handleDeleteApt={handleDeleteApt} />
    </>
  );
};

export default Users;
