import { useState } from "react";
import ApartmentsList from "../components/ApartmentsList";
import AddApartmentModal from "../components/AddApartmentModal";

const Apartments = ({ apt, handleDeleteApt, handleAddApt }) => {
  const [isOpen, setIsOpen] = useState(false);
  const lastFiveApts = [...apt].sort((a, b) => b.id - a.id).slice(0, 5);

  return (
    <div className="apartments-page">
      <div className="apartments-header">
        <button className="add-apartment-btn" onClick={() => setIsOpen(true)}>
          + Add Apartment
        </button>
      </div>

      {isOpen && (
        <AddApartmentModal
          onAdd={handleAddApt}
          onClose={() => setIsOpen(false)}
        />
      )}

      <ApartmentsList apt={lastFiveApts} handleDeleteApt={handleDeleteApt} />
    </div>
  );
};

export default Apartments;
