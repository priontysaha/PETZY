import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ShowInterestForm from "./ShowInterestForm";

const petsData = [
  {
    id: 1,
    name: "Simba",
    type: "Cat",
    age: "2 weeks",
    location: "Seattle, WA",
    time: "about 1 hour ago",
    image: "https://your-image-url.com/cat.jpg",
  },
  {
    id: 2,
    name: "Max",
    type: "Dog",
    age: "2 years",
    location: "Los Angeles, CA",
    time: "1 day ago",
    image: "https://your-image-url.com/dog.jpg",
  },
  {
    id: 3,
    name: "Thumper",
    type: "Rabbit",
    age: "1 year",
    location: "San Francisco, CA",
    time: "1 day ago",
    image: "https://your-image-url.com/rabbit.jpg",
  },
  {
    id: 4,
    name: "Flopsy",
    type: "Rabbit",
    age: "2 years",
    location: "San Francisco, CA",
    time: "1 day ago",
    image: "https://your-image-url.com/white-rabbit.jpg",
  },
];

const Pet = () => {
  const [filter, setFilter] = useState("All Pets");
  const [selectedPet, setSelectedPet] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleShowInterest = (pet) => {
    setSelectedPet(pet);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedPet(null);
  };

  const filteredPets =
    filter === "All Pets"
      ? petsData
      : petsData.filter((pet) => pet.type === filter);

  return (
    <div className="container mt-5 pt-5">
      <h2 className="text-center text-warning fw-bold mt-4">
        Find Your New Friend 🐾
      </h2>
      <p className="text-center text-muted">
        Browse through adorable pets looking for a home.
      </p>
      <div className="d-flex justify-content-end mb-3">
        <select
          className="form-select w-auto"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All Pets</option>
          <option>Dogs</option>
          <option>Cats</option>
          <option>Rabbits</option>
          <option>Birds</option>
          <option>Fish</option>
          <option>Other</option>
        </select>
      </div>
      <div className="row mt-4">
        {filteredPets.map((pet) => (
          <div key={pet.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card shadow-sm pet-card">
              <img
                src={pet.image}
                className="card-img-top"
                alt={pet.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="fw-bold text-warning">{pet.name}</h5>
                <p className="text-muted">
                  <strong>Type:</strong> {pet.type} <br />
                  <strong>Age:</strong> {pet.age} <br />
                  <strong>Location:</strong> {pet.location} <br />
                  <small>{pet.time}</small>
                </p>
                <button
                  className="btn btn-warning rounded-pill show-interest-btn"
                  onClick={() => handleShowInterest(pet)}
                >
                  Show Interest 🐾
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <ShowInterestForm pet={selectedPet} onClose={handleClose} />
      )}

      <footer className="text-center text-muted mt-5 pb-4">
        © 2025 Petzy - Your Path to Pet Adoption
      </footer>

      <style>
        {`
          .container {
            max-width: 1100px;
          }
          .pet-card {
            transition: transform 0.2s ease-in-out;
            border-radius: 15px;
          }
          .pet-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
          }
          .show-interest-btn {
            transition: background 0.2s ease-in-out;
          }
          .show-interest-btn:hover {
            background: #ffcc00;
          }
        `}
      </style>
    </div>
  );
};

export default Pet;
