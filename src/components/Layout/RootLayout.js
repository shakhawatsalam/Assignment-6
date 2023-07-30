import React from "react";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";

const RootLayout = ({ children }) => {
  return (
    <>
      <div className='max-w-7xl mx-auto'>
        {/* <Navbar /> */}
        <div> {children}</div>
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
