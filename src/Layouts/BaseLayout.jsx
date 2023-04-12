import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Core/Footer';
import Navbar from '../Components/Core/Navbar';

const BasicLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="container mx-auto py-3 relative">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default BasicLayout;
