import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from '../view/Register';
import OtpVerfication from '../view/OtpVerfication';
import Dashboard from '../view/Dashboard';
import Profile from '../view/Profile';
const Routers = () => {
  return (
    <Routes>
      <Route path="/" Component={Register} />
      <Route path="/enter-otp" Component={OtpVerfication} />
      <Route path="/dashboard" Component={Dashboard} />
      <Route path="/profile" Component={Profile} />
    </Routes>
  );
};

export default Routers;
