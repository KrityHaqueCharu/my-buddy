import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './Cmnt.css';
const Cmnt = (props) => {
    const{name,email,body,id}=props.cmnt;
    return (
        <React.Fragment>
            <div class="cmnt">
              <div class="container">
           <h3>Name: {name}</h3>
    <h3>Comment: {body}</h3>
    <h5>Email: {email} </h5>
            </div>
            </div> 
        <CssBaseline />
        <Container fixed>
          <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '20px' }} />
        </Container>
      </React.Fragment>
        
    );
};

export default Cmnt;