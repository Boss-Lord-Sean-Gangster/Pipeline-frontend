import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import SignIn from './Signin';
import SignUp from './Signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
    <Switch>
      {/* Define routes for different pages */}
      <Route exact path="/" component={App} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      
      {/* Handle unmatched routes */}
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
  
);
