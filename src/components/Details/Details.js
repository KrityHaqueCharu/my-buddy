import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Show from '../Show/Show';
import Cmnt from '../Cmnt/Cmnt';

const Details = () => {
    const {id}=useParams()
    const[detail, setdetail]= useState([]);
    const[Comment,setComment] = useState([]);
        useEffect( () => {
         const url= `https://jsonplaceholder.typicode.com/posts/${id}`;
         fetch(url)
         .then(res => res.json())
         .then(data => setdetail(data))
        },[])
        useEffect( () => {
            const url= `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
            fetch(url)
            .then(res => res.json())
            .then(data => setComment(data))
           },[])
    return (
        <div>
          
           
         <Show {...detail}></Show>
         {
             Comment.map(cmnt => <Cmnt cmnt={cmnt}></Cmnt> )
         }
           
           
           </div>

    );
};

export default Details;