import React from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function BlogDetails() {
  const { id } = useParams();
  // const detailed_blog = ()=>{
    
  // }

  return (
    <>
    <div className="container">
      <div className="row justify-content-center">

        {/* Blog Content */}
        <div className="col-lg-8">

          {/* Category */}
          <p className="text-uppercase text-muted small mb-2">
            Stock Market
          </p>

          {/* Title */}
          <h1 className="fw-bold mb-3">
            What Your Relationship With Stock Market Says About You
          </h1>

          {/* Meta Info */}
          <p className="text-muted small mb-4">
            June 28, 2021 · 5 min read · By Admin
          </p>

          {/* Featured Image */}
          <img
            src="https://via.placeholder.com/800x400"
            alt="blog"
            className="img-fluid mb-4 rounded"
          />

          {/* Blog Description */}
          <div className="blog-content">
            <p>
              The stock market is often seen as a complex and intimidating place.
              But your relationship with it can reveal a lot about your mindset,
              patience, and decision-making skills.
            </p>

            <p>
              Successful investors understand the importance of discipline,
              risk management, and long-term thinking. Emotional reactions often
              lead to poor decisions.
            </p>

            <p>
              Whether you are a beginner or an experienced trader, self-awareness
              plays a key role in improving your market performance.
            </p>
          </div>

          {/* Tags */}
          <div className="mt-4">
            <span className="badge bg-light text-dark me-2">Stock</span>
            <span className="badge bg-light text-dark me-2">Market</span>
            <span className="badge bg-light text-dark">Trading</span>
          </div>

          {/* Back Link */}
          <div className="mt-5">
            <Link to="/" className="text-decoration-none">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
