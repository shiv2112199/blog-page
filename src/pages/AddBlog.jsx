import React, { useState } from 'react'
import Footer from '../components/Footer';

export default function AddBlog() {
  const [inputValue, setInputValue] = useState({
    "title": "",
    "category": "",
    "content": "",
    "date": "",
    "image": ""
  })
  const addBlog = async (event) => {
    event.preventDefault();
    const res = await fetch('http://localhost:3000/Blog', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(inputValue)
    })
    const data = await res.json();
    console.log(data);

    setInputValue({ 
      "title": "",
      "category": "",
      "content": "",
      "date": "",
      "image": ""
    })
  }
  const inputHanlder = (event) => {
    setInputValue({ ...inputValue, [event.target.name]: event.target.value })
  }

  const uploadImage = async(event)=>{
    let file = event.target.file;
    const formData = new FormData();
    formData.append("file",file);
    formData.append("upload_preset","blog-image")
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dmhaiuijf/image/upload",
      {
        method: "POST",
        body: formData,
      }
    )
    const data = await res.json();
    console.log(data.secure_url);
    setInputValue({...inputValue, "image": data.secure_url})
  }
  return (
    <>
    <div className='container'>
      <h2 className="fw-bold mb-4 mt-4">Add Blogs</h2>
      <form onSubmit={addBlog}>
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
            Image
          </label>
          <input
            type="file"
            name="image"
            id="form3Example4cg"
            value={inputValue.image}
            className="form-control form-control-md"
            onChange={uploadImage}
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
     </>
  )
}
