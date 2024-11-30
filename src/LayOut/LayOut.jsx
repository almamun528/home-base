import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
const LayOut = () => {
    return (
      <main>
        <NavBar></NavBar>
        <Outlet></Outlet>

        <footer className="bg-gray-300 py-3 px-3">
          <Footer></Footer>
        </footer>
      </main>
    );
};

export default LayOut;