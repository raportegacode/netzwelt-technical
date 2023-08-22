import React, { useState } from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Components/pages/home-page.js';
import HomeIndex from './Components/pages/homeindex.js';
import Login from './Components/pages/login.js';
function App() {

  const [token, setToken] = useState();
  if (!token) {
    return <Login path="/account/login" setToken={setToken} />
  }
  return (
    <div className="App">


      <h1>Application</h1>
      <BrowserRouter>

        <Routes>
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/homepage" exact element={<Homepage />} />
          <Route path="/homepage/index" element={<HomeIndex />} />


        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
