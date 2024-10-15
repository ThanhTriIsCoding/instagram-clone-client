import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../Pages/HomePage/HomePage';

const AppRoutes = () => { 
  return (
    <div>
      <div className='flex'> 
        <Sidebar />
      </div>
      <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default AppRoutes;
