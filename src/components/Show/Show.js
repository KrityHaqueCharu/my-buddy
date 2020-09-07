import React from 'react';

const Show = (props) => {
    const {title,id,body}=props;
    return (
        <div>
            <p>Title: {title}</p>
           <p>Id: {id}</p> 
           <p>Body: {body}</p> 
        </div>
    );
};

export default Show;