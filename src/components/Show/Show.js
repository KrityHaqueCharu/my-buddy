import React from 'react';
import './Show.css';

const Show = (props) => {
    const {title,id,body}=props;
    return (
        <div class="show">

           <h3><p>Title: {title}</p></h3> 
           <p>Post: {body}</p> 
           <h2><p>Comments for Post {id}</p></h2>
           <p>******************</p>
        </div>
    );
};

export default Show;