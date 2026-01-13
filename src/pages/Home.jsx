import React from "react";
import BlogCard from "../pages/BlogCard";
import Footer from "../components/Footer";

export default function Home() {

  return (
    <>
    <div className="container">
      {/* Section Heading */}
      <h2 className="fw-bold mb-4 mt-4">Latest Articles</h2>

      {/* Blog Cards Grid */}
      <div className="row">
        <BlogCard />
      </div>
    </div>
    </>
  );
}
