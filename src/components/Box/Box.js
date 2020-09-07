import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Users from '../Users/Users'; 
import './Box.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 10,
  },
  pos: {
    marginBottom: 12,
  },
});


const Box = (props) => {
    const {title,id}=props;
    const classes = useStyles();
    return (
        <div class="post">
             <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         
        </Typography>
        <Typography variant="h5" component="h2">
        Title:{title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Number: {id}
        </Typography>
        <Typography variant="body2" component="p">
          
         
          <br />
         
        </Typography>
      </CardContent>
      </Card>
        <button class="btn"> <Link to={"/"+id}>See More</Link>
        

        </button>
        </div>
    );
};

export default Box;