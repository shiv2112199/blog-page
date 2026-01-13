import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function ManageBlog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlog()
  }, []);

  async function getBlog() {
    try {
      let res = await fetch("http://localhost:3000/Blog", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      let data = await res.json();
      setBlogs(data);
      //   console.log(data)
    }
    catch (error) {
      console.log(error)
    }
  }
  getBlog()
  return (
    <>
      <div className="container">

        <h2 className="fw-bold mb-4 mt-4">Manage Blogs</h2>

        {/* Blog Card */}
        {blogs.toReversed().map((items, index) =>
          <div className="card mb-4 shadow-sm border-0" key={index}>
            <div className="row g-0 align-items-center">

              {/* Image */}
              <div className="col-md-3">
                <img
                  src={items.image}
                  className="img-fluid rounded-start"
                  alt="blog"
                />
              </div>

              {/* Content */}
              <div className="col-md-7">
                <div className="card-body">
                  <p className="text-muted small mb-1">{items.caterory}</p>

                  <h5 className="fw-bold">
                    {items.title}
                  </h5>

                  <p className="text-muted mb-2">
                    {items.date}
                  </p>

                  <p className="card-text">
                    {items.content}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="col-md-2 text-center">
                <div className="d-flex flex-column gap-2 p-3">
                  <button className="btn btn-outline-primary btn-lg">
                    <Link className="text-decoration-none" to={`/update/${items.id}`}>
                      Edit
                    </Link>
                  </button>
                  <button className="btn btn-outline-danger btn-lg">
                    <Link className="text-decoration-none" to={`/delete/${items.id}`}>
                      Delete
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
