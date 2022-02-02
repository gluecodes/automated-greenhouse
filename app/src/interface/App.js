import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from './pages';

export const App = () => (
  <BrowserRouter basename="/">
    <Routes>
      <Route exact path="/" element={<Dashboard />}></Route>
    </Routes>
  </BrowserRouter>
);
