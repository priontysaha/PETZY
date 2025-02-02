import React from "react";

const Contact = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Contact Us</h1>
      <p>If you have any questions or concerns, feel free to reach out to us!</p>
      <p>Email: snehaaa120@gmail.com</p>
      <p>Phone: +8801749411698 </p>
      <p>Follow us on:</p>
      <div>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>{" "}
        |{" "}
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>{" "}
        |{" "}
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>{" "}
        |{" "}
        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Contact;