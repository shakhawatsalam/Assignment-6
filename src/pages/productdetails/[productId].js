import RootLayout from "@/components/Layout/RootLayout";
import Image from "next/image";
import React from "react";

const productDetails = ({ product }) => {
  return (
    <div>
      <div className='hero min-h-screen'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-bold'>{product.productName}</h1>
            <p className='py-6'>{product.description}</p>
            <h3 className='font-bold text-2xl'>Category: {product.category}</h3>
            <h3 className='font-bold text-2xl'>Price: {product.price}</h3>
            <h3 className='font-bold text-2xl'>Status: {product.status}</h3>
            <h3 className='font-bold text-2xl'>
              Rating: {product.averageRating}
            </h3>
            <h3 className='font-bold text-2xl'>Key Features:</h3>
            <h4 className='text-2xl'> Brand: {product.keyFeatures.brand}</h4>
            <h4 className='text-2xl'> Model: {product.keyFeatures.brand}</h4>
            <h4 className='text-2xl'>
              {" "}
              Specification: {product.keyFeatures.brand}
            </h4>
            <h4 className='text-2xl'> port: {product.keyFeatures.brand}</h4>
            <h4 className='text-2xl'> Type: {product.keyFeatures.brand}</h4>
            <h4 className='text-2xl'>
              {" "}
              Resolution: {product.keyFeatures.brand}
            </h4>
            <h4 className='text-2xl'> Voltage: {product.keyFeatures.brand}</h4>
          </div>
          <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <div className='card-body'>
              <div className='w-full h-full flex justify-center items-center'>
                <Image
                  width={350}
                  height={300}
                  src={product.image}
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
export default productDetails;

productDetails.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.BASE_URL}/components`);
  const products = await res.json();
  const paths = products.data?.map((product) => ({
    params: {
      productId: product._id,
    },
  }));

  return { paths, fallback: false }; // * true and Blocking
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `${process.env.BASE_URL}/components/${params?.productId}`
  );
  const data = await res.json();
  return {
    props: {
      product: data,
    },
  };
};
