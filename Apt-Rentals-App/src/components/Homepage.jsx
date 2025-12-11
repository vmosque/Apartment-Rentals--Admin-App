import { useState } from "react";
import AptData from "../assets/listings.json";

const Homepage = () => {
  const [apt, setApt] = useState(AptData.results);
  return (
    <>
      {apt.slice(1, 6).map((aptCharac) => (
        <div id="card">
          <img className="img" src={aptCharac.picture_url} alt="" />
          <h1 className="name">{aptCharac.name}</h1>
          <h1 className="location">{aptCharac.host_location}</h1>
          <h1 className="price">{aptCharac.price}</h1>
        </div>
      ))}
    </>
  );
};

export default Homepage;
