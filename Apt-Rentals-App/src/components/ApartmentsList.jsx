const ApartmentsList = ({ apt, handleDeleteApt, isPreview, onEdit }) => {
  return (
    <>
      <div className={`list-header ${isPreview ? "no-actions" : ""} `}>
        <span>Image</span>
        <span>Name</span>
        <span>Location</span>
        <span>Price</span>
        {!isPreview && <span>Actions</span>}
      </div>

      {apt.map((aptCharac) => (
        <div
          key={aptCharac.id}
          className={`card ${isPreview ? "no-actions" : ""}`}
        >
          <img className="img" src={aptCharac.picture_url} alt="" />
          <p className="name">{aptCharac.name}</p>
          <p className="location">{aptCharac.host_location}</p>
          <p className="price">{aptCharac.price}</p>

          {!isPreview && (
            <div className="actions">
              <button onClick={() => onEdit(aptCharac)}>EDIT</button>
              <button onClick={() => handleDeleteApt(aptCharac.id)}>
                DELETE
              </button>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default ApartmentsList;
