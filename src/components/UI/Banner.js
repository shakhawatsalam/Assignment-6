import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <>
      <div className='hero h-[70vh]'>
        <div className='hero-content flex-col lg:flex-row'>
          <Image width={500} height={500} src='https://www.startech.com.bd/image/cache/catalog/desktop-pc/desktop-offer/core-i7-10700-desktop-pc-01-500x500.webp' />
          <div>
            <h1 className='text-5xl font-bold'>Build Your Dream Pc</h1>
            <p className='py-6'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className='btn btn-primary'>Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
