import React from 'react';
import { Outlet } from 'react-router-dom';

const Auth = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full bg-white shadow-lg rounded-lg border border-gray-200">
        <Outlet />
      </div>
    </div>
  );
};

export default Auth;