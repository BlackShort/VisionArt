import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Box } from '@mui/material';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import VisionGround from './Components/VisionGround';


export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Box sx={{height:'calc(100vh - (35px + 1.4em))', overflowY:'scroll'}}>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/VisionGround' element={<VisionGround/>}/>
        </Routes>
      </Box>
    </BrowserRouter>
  )
}
