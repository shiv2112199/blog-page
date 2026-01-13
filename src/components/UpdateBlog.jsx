import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AddBlog from '../pages/AddBlog'

export default function UpdateBlog() {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState({
    "title": "",
    "category": "",
    "content": "",
    "date": "",
    "image": ""
  })
  const { id } = useParams()

  useEffect(() => {
    getBlog()
  }, []);

  const getBlog = async () => {
    try {
      let res = await fetch(`http://localhost:3000/Blog/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      let data = await res.json();
      setInputValue(data)
      console.log(data)
    }
    catch (error) {
      console.log(error)
    }
  }
  const inputHanlder = (event) => {
    setInputValue({ ...inputValue, [event.target.name]: event.target.value })
  }
  const update_blog = async (event) => {
    event.preventDefault();
    const res = await fetch(`http://localhost:3000/Blog/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputValue),
    });
    navigate("/manageblog")
  };
  return (
    <div className='container'>
      <h2 className="fw-bold mb-4 mt-4">Add Blogs</h2>
      <form onSubmit={update_blog}>
        <div data-mdb-input-init className="form-outline mb-1">
          <label className="form-label" htmlFor="form3Example1cg">
            Title
          </label>
          <input
            type="text"
            id="form3Example1cg"
            className="form-control form-control-md"
            name="title"
            value={inputValue.title}
            onChange={inputHanlder}
          />
        </div>
        <div data-mdb-input-init className="form-outline mb-1">
          <label className="form-label" htmlFor="form3Example3cg">
            Category
          </label>
          <input
            type="text"
            value={inputValue.category}
            name="category"
            id="form3Example3cg"
            className="form-control form-control-md"
            onChange={inputHanlder}
          />
        </div>
        <div data-mdb-input-init className="form-outline mb-1">
          <label className="form-label" htmlFor="form3Example4cg">
            Content
          </label>
          <textarea
            type="text"
            name="content"
            id="form3Example4cg"
            value={inputValue.content}
            className="form-control form-control-md"
            onChange={inputHanlder}
          ></textarea>
        </div>
        <div data-mdb-input-init className="form-outline mb-1">
          <label className="form-label" htmlFor="form3Example4cg">
            Date
          </label>
          <input
            type="date"
            name="date"
            id="form3Example4cg"
            value={inputValue.date}
            className="form-control form-control-md"
            onChange={inputHanlder}
          ></input>
        </div>
        <div data-mdb-input-init className="form-outline mb-1">
          <label className="form-label" htmlFor="form3Example4cg">
            Image Address
          </label>
          <input
            type="text"
            name="image"
            id="form3Example4cg"
            value={inputValue.image}
            className="form-control form-control-md"
            onChange={inputHanlder}
          ></input>
        </div>
        <div className="d-flex justify-content-end mt-4">
          <button
            type="submit"
            data-mdb-button-init
            data-mdb-ripple-init
            className="btn btn-dark btn-block btn-lg gradient-custom-4 text-white"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  )
}