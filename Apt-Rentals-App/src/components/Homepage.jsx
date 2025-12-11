import AptData from "../assets/listings.json";

const Homepage = ({ apt, handleDeleteApt }) => {
  return (
    <>
      {apt.slice(1, 6).map((aptCharac) => (
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

export default Homepage;
