const ApartmentsList = ({ apt, handleDeleteApt }) => {
  return (
    <>
      <div className="list-header">
        <span>Image</span>
        <span>Name</span>
        <span>Location</span>
        <span>Price</span>
        <span>Actions</span>
      </div>

      {apt.map((aptCharac) => (
        <div key={aptCharac.id} id="card">
          <img className="img" src={aptCharac.picture_url} alt="" />
          <h1 className="name">{aptCharac.name}</h1>
          <h1 className="location">{aptCharac.host_location}</h1>
          <h1 className="price">{aptCharac.price}</h1>

          <div className="actions">
            <button>EDIT</button>
            <button onClick={() => handleDeleteApt(aptCharac.id)}>
              DELETE
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ApartmentsList;
