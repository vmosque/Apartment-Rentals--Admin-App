import React from "react";

import ApartmentsList from "../components/ApartmentsList";

const Users = ({ apt, handleDeleteApt }) => {
  return (
    <>
      <ApartmentsList apt={apt.slice(0, 5)} handleDeleteApt={handleDeleteApt} />
    </>
  );
};

export default Users;
