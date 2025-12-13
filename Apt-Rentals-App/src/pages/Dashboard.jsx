import ApartmentsList from "../components/ApartmentsList";
const Dashboard = ({ apt, handleDeleteApt }) => {
  return (
    <>
      <h1>esto es dashboard</h1>
      <ApartmentsList apt={apt.slice(0, 5)} handleDeleteApt={handleDeleteApt} />
    </>
  );
};

export default Dashboard;
