import ApartmentsList from "../components/ApartmentsList";

const Dashboard = ({ apt, handleDeleteApt }) => {
  const activeApts = apt.filter(
    (aptCharac) => aptCharac.has_availability
  ).length;

  return (
    <div className="dashboard">
      <div id="dashboard-container">
        <div className="stat-card">
          <h1>Total Apartments</h1>
          <h2>{apt.length}</h2>
        </div>

        <div className="stat-card">
          <h1>Active Apartments</h1>
          <h2>{activeApts}</h2>
        </div>

        <div className="stat-card">
          <h1>Reservations</h1>
          <h2>10</h2>
        </div>

        <div className="stat-card">
          <h1>Users</h1>
          <h2>20</h2>
        </div>
      </div>

      <div className="dashboard-list">
        <ApartmentsList
          apt={apt.slice(0, 5)}
          handleDeleteApt={handleDeleteApt}
          isPreview={true}
        />
      </div>
    </div>
  );
};

export default Dashboard;
