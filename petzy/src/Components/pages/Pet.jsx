import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ShowInterestForm from "./ShowInterestForm";

const petsData = [
  {
    id: 1,
    name: "Simba",
    type: "Cat",
    age: "2 weeks",
    location: "Dhanmondi,Dhaka",
    time: "about 1 hour ago",
    image: "https://your-image-url.com/cat1.jpg",
  },
  {
    id: 2,
    name: "Max",
    type: "Dog",
    age: "2 years",
    location: "Tejgaon, Dhaka",
    time: "5 hours ago",
    image: "https://your-image-url.com/dog1.jpg",
  },
  {
    id: 3,
    name: "Bella",
    type: "Dog",
    age: "2 months",
    location: "Mirpur 10, Dhaka",
    time: "11 hours ago",
    image: "https://your-image-url.com/dog2.jpg",
  },
  {
    id: 4,
    name: "Oliver",
    type: "Cat",
    age: "1 year",
    location: "Lalmatia, Dhaka",
    time: "19 hours ago",
    image: "https://your-image-url.com/cat2.jpg",
  },
  {
    id: 5,
    name: "Thumper",
    type: "Rabbit",
    age: "1 year",
    location: "Naogaon, Rajshahi",
    time: "1 day ago",
    image: "https://your-image-url.com/rabbit1.jpg",
  },
  {
    id: 6,
    name: "Flopsy",
    type: "Rabbit",
    age: "1.5 years",
    location: "Srimangal, Sylhet",
    time: "1 day ago",
    image: "https://your-image-url.com/white-rabbit2.jpg",
  },
  {
    id: 7,
    name: "Goldie",
    type: "Fish",
    age: "6 months",
    location: "Uttora, Dhaka",
    time: "1 day ago",
    image: "https://your-image-url.com/fish.jpg",
  },
  {
    id: 8,
    name: "Polly",
    type: "Bird",
    age: "1 year",
    location: "Bandarban, CTG",
    time: "1 day ago",
    image: "https://your-image-url.com/bird.jpg",
  },
  {
    id: 9,
    name: "Tweety",
    type: "Bird",
    age: "8 months",
    location: "Gazipur, Dhaka",
    time: "2 days ago",
    image: "https://your-image-url.com/bird2.jpg",
  },
  {
    id: 10,
    name: "Bubbles",
    type: "Ginipig",
    age: "1.5 years",
    location: "Sitakundo, CTG",
    time: "2 days ago",
    image: "https://your-image-url.com/other1ginipig.jpg",
  },
  {
    id: 11,
    name: "Tufan",
    type: "Cat",
    age: "2 months",
    location: "Uttora, Dhaka",
    time: "2 days ago",
    image: "https://your-image-url.com/cat3.jpg",
  },
  {
    id: 12,
    name: "Galaxy",
    type: "Dog",
    age: "11 months",
    location: "Mirpur 10, Dhaka",
    time: "2 days ago",
    image: "https://your-image-url.com/dog4.jpg",
  },
  {
    id: 13,
    name: "Toffee",
    type: "Cat",
    age: "2 years",
    location: "Banasree, Dhaka",
    time: "3 days ago",
    image: "https://your-image-url.com/cat4.jpg",
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
      <h2 className="text-center text-primary fw-bold mt-4">
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
          <option>Cats</option>
          <option>Dogs</option>
          <option>Rabbits</option>
          <option>Fishes</option>
          <option>Birds</option>
          <option>Others</option>
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
                <h5 className="fw-bold text-primary">{pet.name}</h5>
                <p className="text-muted">
                  <strong>Type:</strong> {pet.type} <br />
                  <strong>Age:</strong> {pet.age} <br />
                  <strong>Location:</strong> {pet.location} <br />
                  <small>{pet.time}</small>
                </p>
                <button
                  className="btn btn-primary rounded-pill show-interest-btn"
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
            background: cornflowerblue;
          }
        `}
      </style>
    </div>
  );
};

export default Pet;
