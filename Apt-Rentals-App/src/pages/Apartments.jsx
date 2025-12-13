import Layout from "../components/Layout";
import Dashboard from "./Dashboard";
import ApartmentsList from "../components/ApartmentsList";

const Apartments = ({ apt, handleDeleteApt }) => {
  return (
    <>
      <ApartmentsList apt={apt} handleDeleteApt={handleDeleteApt} />
    </>
  );
};

export default Apartments;
