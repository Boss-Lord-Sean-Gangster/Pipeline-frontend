import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import SignIn from './Signin';
import SignUp from './Signup';
import { PipelineUI } from './ui';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      {/* Define routes for different pages */}
      <Route path="/" element={<App />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      
      {/* Handle unmatched routes (optional) */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  </Router>
);
