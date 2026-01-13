import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-light mt-5 pt-5">
      <div className="container">

        {/* Top Footer */}
        <div className="row pb-4">

          {/* Brand / About */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Businessly</h5>
            <p className="text-muted small">
              Businessly is a modern blog platform sharing insights on business,
              technology, and market trends to help readers stay informed.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-muted text-decoration-none">Home</Link></li>
              <li><Link to="/about" className="text-muted text-decoration-none">About</Link></li>
              <li><Link to="/addblog" className="text-muted text-decoration-none">Add Blog</Link></li>
              <li><Link to="/manageblog" className="text-muted text-decoration-none">Manage Blog</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Categories</h6>
            <ul className="list-unstyled">
              <li className="text-muted">Stock Market</li>
              <li className="text-muted">Technology</li>
              <li className="text-muted">Business</li>
              <li className="text-muted">Finance</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Newsletter</h6>
            <p className="text-muted small">
              Subscribe to get the latest blog updates.
            </p>
            <input
              type="email"
              className="form-control mb-2"
              placeholder="Your email"
            />
            <button className="btn btn-dark btn-sm w-100">
              Subscribe
            </button>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-top pt-3 pb-3 text-center">
          <p className="text-muted small mb-0">
            © {new Date().getFullYear()} Businessly. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
