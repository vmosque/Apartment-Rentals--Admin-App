import { useState, useEffect } from "react";

const AddApartmentModal = ({
  mode = "add",
  initialData,
  onAdd,
  onEdit,
  onClose,
}) => {
  const [name, setName] = useState(initialData?.name || "");
  const [location, setLocation] = useState(initialData?.host_location || "");
  const [price, setPrice] = useState(initialData?.price || "");
  const [image, setImage] = useState(initialData?.picture_url || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    const apartmentData = {
      id: initialData?.id || Date.now(),
      name,
      host_location: location,
      price,
      picture_url: image || "https://via.placeholder.com/150",
    };

    if (mode === "edit") {
      onEdit(apartmentData);
    } else {
      onAdd(apartmentData);
    }

    onClose();
  };

  // Evita scroll del body cuando el modal está abierto
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{mode === "edit" ? "Edit apartment" : "Add apartment"}</h2>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            <label>
              Apartment name
              <input
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>

            <label>
              Location
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </label>

            <label>
              Price ($)
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </label>

            <label>
              Image URL
              <input value={image} onChange={(e) => setImage(e.target.value)} />
            </label>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddApartmentModal;
