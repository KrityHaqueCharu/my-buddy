import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Users from './components/Users/Users';
import Comments from './components/Comments/Comments';
import Box from './components/Box/Box'
import Friends from './components/Friends/Friends';
import Details from './components/Details/Details';
import Mat from './components/Mat/Mat';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
  <Router> 
    <Switch>
      <Route path="/post">
      <Users></Users>
      </Route>
      <Route exact path="/">
      <Users></Users>
      </Route>
      <Route path="/friends">
      <Friends></Friends>
      </Route>
      <Route path="/:id">
      <Details></Details>
      </Route>
      <Route path="/comments">
      <Comments></Comments>
      </Route>
      
    </Switch>
</Router>
      
     
    </div>
  );
}

export default App;
