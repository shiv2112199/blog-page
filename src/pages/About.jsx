import React from "react";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
    <div className="container">
      <h2 className="fw-bold mb-4 mt-4">About Us</h2>
      <div className="row align-items-stretch">

        {/* Image Section */}
        <div className="col-lg-6 p-0">
          <img
            src="https://plus.unsplash.com/premium_photo-1668383778557-d71c562fdb4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWJvdXQlMjB1c3xlbnwwfHwwfHx8MA%3D%3D"
            alt="about"
            className="img-fluid h-100 w-100 object-fit-cover"
          />
        </div>

        {/* Content Section */}
        <div className="col-lg-6 d-flex align-items-center px-5">
          <div>
            <h2 className="fw-bold mb-4">About Businessly</h2>

            <p className="text-muted mb-4">
              Businessly is a modern blogging platform focused on business,
              finance, technology, and personal growth. Our goal is to share
              meaningful insights that help readers make better decisions.
            </p>

            <p className="text-muted mb-4">
              We believe in clarity, simplicity, and consistency. Every article
              is written to provide value, whether you are a beginner or an
              experienced professional.
            </p>

            <p className="text-muted">
              From stock market psychology to technology trends, Businessly
              delivers content that matters.
            </p>
          </div>
        </div>

      </div>
    </div>
    </>
  );
}