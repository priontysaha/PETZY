import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <section className="text-center py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold mt-5">Your Pets Are Our Priority</h2>
          <p className="lead">
            Ensure you are fully prepared to provide proper care and attention
            to your pet before welcoming them into your home.
          </p>
          <button className="btn btn-warning btn-lg">Adopt a Pet</button>
        </div>
        <div className="text-center mt-4">
          <img
            src="dog-image.png"
            alt="Dog"
            className="img-fluid"
            style={{ maxHeight: "200px" }}
          />
        </div>
      </section>

      <section className="text-center py-5 bg-light">
        <div className="container w-50 mx-auto bg-dark text-white p-4 rounded-3 shadow-lg text-center">
          <h2 className="fw-bold">
            1.2K+ Furry Friends Living Their Best Lives
          </h2>
          <p>
            With a focus on matching the right pet with the right family,
            PawFinds makes it easy to adopt love and foster happiness.
          </p>
        </div>
      </section>

      <section className="py-5">
        <div className="container text-center">
          <h2 className="mt-5">Planning to Adopt a Pet?</h2>
          <div className="row mt-5">
            <div className="col-md-4">
              <h4 className="fw-bold" style={{ color: "cornflowerblue" }}>
                The Joy of Pet Adoption
              </h4>
              <p>
                Bringing a pet into your life can be an incredibly rewarding
                experience, not just for you but for the furry friend you
                welcome into your home.
              </p>
            </div>
            <div className="col-md-4">
              <h4 className="fw-bold" style={{ color: "cornflowerblue" }}>
                A Guide to Pet Adoption
              </h4>
              <p>
                Are you considering adding a new pet to your family? Pet
                adoption is a wonderful option to consider.
              </p>
            </div>
            <div className="col-md-4">
              <h4 className="fw-bold" style={{ color: "cornflowerblue" }}>
                Healing Power of Animals
              </h4>
              <p>
                Animals have an extraordinary ability to touch our lives in
                profound ways, offering not only companionship but also a
                therapeutic bond.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
