import React from 'react'
import { Navigate, redirect, useNavigate, useParams } from 'react-router-dom';

export default function DeleteBlog() {
    const { id } = useParams()
    const navigate = useNavigate();

    const delete_blog = async () => {
        let res = await fetch(`http://localhost:3000/Blog/${id}`, {
            method: "DELETE"
        })
        let data = await res.json();
        alert("Data Successfully Deleted..");
        navigate("/manageblog")
        }  
        delete_blog()
    
    return (
        <></>
    )
}