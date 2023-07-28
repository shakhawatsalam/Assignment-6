import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const RootLayout = ({ children }) => {
  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <Navbar />
        <div> {children}</div>
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
