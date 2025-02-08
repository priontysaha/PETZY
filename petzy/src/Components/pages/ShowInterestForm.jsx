import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ShowInterestForm = ({ pet, onClose }) => {

  const handleConfirmation = () => {
    alert("Your request is pending.");
    navigate("/home");
  };

  return (
    <div className="modal show d-block" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" style={{ color: "rgb(63, 136, 238)" }}>
              Pet Adoption Application
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="d-flex align-items-center mb-3">
              <img
                src={pet.image}
                alt={pet.name}
                className="me-3"
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
              <div>
                <h6 className="fw-bold" style={{ color: "rgb(63, 136, 238)" }}>
                  {pet.name}
                </h6>
                <p className="text-muted mb-0">
                  <strong>Type:</strong> {pet.type} <br />
                  <strong>Age:</strong> {pet.age} <br />
                  <strong>Location:</strong> {pet.location}
                </p>
              </div>
            </div>
            <form>
              <div className="mb-2">
                <label className="form-label">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-2">
                <label className="form-label">Phone No.:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter phone number"
                />
              </div>
              <div className="mb-2">
                <label className="form-label">Pet Living Situation:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Describe your home setup"
                />
              </div>
              <div className="mb-2">
                <label className="form-label">Previous Pet Experience:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Do you have pet experience?"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Any Other Pets?</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="List other pets (if any)"
                />
              </div>
              <button
                type="submit"
                className="btn w-100"
                style={{ backgroundColor: "rgb(63, 136, 238)", borderColor: "rgb(63, 136, 238)" }}
                onClick={handleConfirmation}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowInterestForm;
