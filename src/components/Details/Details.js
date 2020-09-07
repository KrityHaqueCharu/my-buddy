import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Show from '../Show/Show';

const Details = () => {
    const {id}=useParams()
    const[detail, setdetail]= useState([]);
        
        useEffect( () => {
         const url= `https://jsonplaceholder.typicode.com/posts/${id}`;
         fetch(url)
         .then(res => res.json())
         .then(data => setdetail(data))
        },[])
    return (
        <div>
           <h1>{id} No. Post </h1> 
           
         <Show {...detail}></Show>)
           
           
           </div>

    );
};

export default Details;