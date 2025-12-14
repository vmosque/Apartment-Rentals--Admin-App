import ApartmentsList from "../components/ApartmentsList";

const Apartments = ({ apt, handleDeleteApt }) => {
  return (
    <>
      <ApartmentsList apt={apt.slice(0, 5)} handleDeleteApt={handleDeleteApt} />
    </>
  );
};

export default Apartments;
