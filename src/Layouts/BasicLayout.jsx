import React from 'react';
import { Outlet } from 'react-router-dom';
const BasicLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="container mx-auto py-3 relative">
        <Outlet />
      </main>
    </div>
  );
}

export default BasicLayout;
