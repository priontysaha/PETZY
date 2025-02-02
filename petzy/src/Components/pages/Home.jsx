import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <section className="text-center py-5 bg-light">
        <div className="container">
          <h1 className="display-4">Your Pets Are Our Priority</h1>
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

      <section className="text-center py-5 bg-dark text-white">
        <div className="container">
          <h2>1.2K+ Furry Friends Living Their Best Lives</h2>
          <p>
            With a focus on matching the right pet with the right family,
            PawFinds makes it easy to adopt love and foster happiness.
          </p>
        </div>
      </section>

      <section className="py-5">
        <div className="container text-center">
          <h2>Planning to Adopt a Pet?</h2>
          <div className="row mt-4">
            <div className="col-md-4">
              <h4>The Joy of Pet Adoption</h4>
              <p>
                Bringing a pet into your life can be an incredibly rewarding
                experience, not just for you but for the furry friend you
                welcome into your home.
              </p>
            </div>
            <div className="col-md-4">
              <h4>A Guide to Pet Adoption</h4>
              <p>
                Are you considering adding a new pet to your family? Pet
                adoption is a wonderful option to consider.
              </p>
            </div>
            <div className="col-md-4">
              <h4>Healing Power of Animals</h4>
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
