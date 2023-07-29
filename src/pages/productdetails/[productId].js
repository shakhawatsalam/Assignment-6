import RootLayout from "@/components/Layout/RootLayout";
import Image from "next/image";
import React from "react";

const productDetails = () => {
  return (
    <div>
      <div className='hero min-h-screen'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-bold'>Login now!</h1>
            <p className='py-6'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <div className='card-body'>
              <div className="w-full h-full flex justify-center items-center">
                <Image
                  width={350}
                  height={300}
                  src='https://www.startech.com.bd/image/cache/catalog/monitor/msi/mp223/mp223-06-500x500.webp'
                  className='max-w-sm rounded-lg shadow-2xl'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

productDetails.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};

export default productDetails;
