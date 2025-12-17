import { useState } from "react";
import ApartmentsList from "../components/ApartmentsList";
import AddApartmentModal from "../components/AddApartmentModal";

const Apartments = ({ apt, handleDeleteApt, handleAddApt, handleEditApt }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [editingApt, setEditingApt] = useState(null);

  const lastFiveApts = [...apt].sort((a, b) => b.id - a.id).slice(0, 5);

  return (
    <div className="apartments-page">
      <div className="apartments-header">
        <button
          className="add-apartment-btn"
          onClick={() => {
            setEditingApt(null);
            setIsOpen(true);
          }}
        >
          + Add Apartment
        </button>
      </div>

      {isOpen && (
        <AddApartmentModal
          mode={editingApt ? "edit" : "add"}
          initialData={editingApt}
          onAdd={handleAddApt}
          onEdit={handleEditApt}
          onClose={() => {
            setIsOpen(false);
            setEditingApt(null);
          }}
        />
      )}

      <ApartmentsList
        apt={lastFiveApts}
        handleDeleteApt={handleDeleteApt}
        onEdit={(apt) => {
          setEditingApt(apt);
          setIsOpen(true);
        }}
      />
    </div>
  );
};

export default Apartments;
