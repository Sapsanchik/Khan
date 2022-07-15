import React from 'react';
import Navbar from './Home/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Home/Footer';

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <Outlet />

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
