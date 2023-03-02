import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/pages/Home'
import About from './components/pages/About'
import Resume from './components/pages/Resume'
import Footer from './components/Footer';


function App() {
  return (
    <div className="App background1">
        <Router>
          <NavBar className="nav"/>
            <Switch>
              <Route path='/' exact  component = {Home}/>
              <Route path='/about' component={About} />
              <Route path='/resume' component={Resume} />
            </Switch>
          <Footer className="footer"/>
        </Router>
    </div>
  );
}

export default App;
