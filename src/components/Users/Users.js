import React, { useState, useEffect } from 'react';
import Box from '../Box/Box';

const Users = () => {
    const[info, setinfo]= useState([]);
    
    useEffect( () => {
     const url= 'https://jsonplaceholder.typicode.com/posts';
     fetch(url)
     .then(res => res.json())
     .then(data => setinfo(data))
    },[])
    return (
        <div>
            
           {
               info.map(infos => <Box title={infos.title}  UserId={infos.UserId} id={infos.id}></Box>)
           }
        </div>
    );
};

export default Users;
