import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  return (
    <div className="container text-center py-5" style={{ marginTop: "100px" }}>

      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="mb-4">Let’s Get in Touch</h1>
          <p className="fw-bold mb-4" style={{ fontSize: "1.25rem" }}>If you have any questions or concerns, feel free to reach out to us!</p>
          <p className="mb-3">
            <i className="bi bi-envelope"></i> <a href="mailto:snehaaa120@gmail.com" className="text-dark">snehaaa120@gmail.com</a>
          </p>
          <p className="mb-3">
            <i className="bi bi-telephone"></i> <a href="tel:+8801749411698" className="text-dark">+8801749411698</a>
          </p>
          <p className="fw-bold">Follow us on:</p>
          <div className="ms-5 d-flex flex-column align-items-center">
            <p className="mb-0">
              <i className="bi bi-linkedin me-2"></i> <a href="https://linkedin.com" className="text-dark text-decoration-none" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
            <p className="mb-0">
              <i className="bi bi-github me-2"></i> <a href="https://github.com" className="text-dark text-decoration-none" target="_blank" rel="noopener noreferrer">GitHub</a>
            </p>
            <p className="mb-0">
              <i className="bi bi-instagram me-2"></i> <a href="https://instagram.com" className="text-dark text-decoration-none" target="_blank" rel="noopener noreferrer">Instagram</a>
            </p>
            <p className="mb-0">
              <i className="bi bi-whatsapp me-2"></i> <a href="https://whatsapp.com" className="text-dark text-decoration-none" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </p>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="/contact.png"
            alt="Contact Illustration"
            style={{ maxWidth: "30%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;