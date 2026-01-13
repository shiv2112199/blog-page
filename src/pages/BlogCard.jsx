import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import Footer from "../components/Footer";


export default function BlogCard() {
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
            {blogs.toReversed().map((items, index) =>
                <div className="col-lg-6 col-md-6 mb-4" key={index}>
                    <div className="card border-0 shadow-sm h-100">

                        {/* Image */}
                        <img
                            src={items.image}
                            className="card-img-top"
                            alt="blog"
                        />

                        {/* Card Body */}
                        <div className="card-body">
                            <p className="text-muted fs-5 mb-2">{items.title}</p>
                            <Link to="/blog/1" className="text-decoration-none text-dark">
                                <h5 className="card-title fw-bold fs-4">
                                    {items.content}
                                </h5>
                            </Link>
                            <p className="text-muted small mb-0">
                                {items.date}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
