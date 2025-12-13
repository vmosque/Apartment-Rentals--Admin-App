import React from "react";

const ApartmentsList = ({ apt, handleDeleteApt }) => {
  return (
    <>
      {apt.map((aptCharac) => (
        <div key={aptCharac.id} id="card">
          <img className="img" src={aptCharac.picture_url} alt="" />
          <h1 className="name">{aptCharac.name}</h1>
          <h1 className="location">{aptCharac.host_location}</h1>
          <h1 className="price">{aptCharac.price}</h1>

          <button onClick={() => handleDeleteApt(aptCharac.id)}>DELETE</button>
        </div>
      ))}
    </>
  );
};

export default ApartmentsList;
