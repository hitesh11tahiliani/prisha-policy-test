import './App.css';
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';

import Login from './pages/login';
import Signup from './pages/signup';
import EmpDashboard from './pages/empDashboard';
import HrDashboard from './pages/hrDashboard';

function App() {
  

  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/empDashboard" element={<EmpDashboard />} />
            <Route path="/hrDashboard" element={<HrDashboard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
