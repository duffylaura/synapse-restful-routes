import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Login from './pages/Login.js';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Group from './pages/Group';
import Network from './pages/Network';
import NoMatch from './pages/NoMatch';
import Conversation from './pages/Conversation';
import Jobs from './pages/Jobs';
import About from './pages/About';

function App() {
  return (
    <>
      <Router>
        <div>
        <Routes>
        <Route 
                path="/" 
                element={<Landing />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
              <Route 
                path="/about" 
                element={<About />} 
              />
              <Route 
                path="/profile" 
                element={<Profile />} 
              />
              <Route 
                path="/group" 
                element={<Group />} 
              />
              <Route 
                path="/conversation" 
                element={<Conversation />} 
              />
              <Route 
                path="/network" 
                element={<Network />} 
              />
              <Route 
                path="/jobs" 
                element={<Jobs />} 
              />
              <Route 
                path="*" 
                element={<NoMatch />} 
              />
        </Routes>
        </div>
      </Router>

    

    </>
  )
}

export default App;
