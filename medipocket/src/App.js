import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 
"react-router-dom";
import Home from './Home';
import Upload from './Upload';
import Camera from './Camera';
// import Header from './Header';


function App() {
  return (
    
    <div className="App">
      <Router>
  
        <Switch>
          <Route path="/upload">
            <Upload />
          </Route>
          <Route path="/camera">
            <Camera />
          </Route>
          <Route path="/"> 
             <Home />
           
          </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
