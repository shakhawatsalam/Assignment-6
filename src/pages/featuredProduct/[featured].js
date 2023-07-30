import RootLayout from "@/components/Layout/RootLayout";
import Singleproduct from "@/components/UI/Singleproduct";
import { useRouter } from "next/router";
import React from "react";

const featuredProduct = ({ product }) => {
  const router = useRouter();
  return (
    <>
      <h1 className='text-center text-6xl'>{router.query.featured}</h1>
      <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
        <div className='flex items-center justify-center mb-5'></div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {product.data?.map((product) => (
            <Singleproduct product={product} key={product._id}></Singleproduct>
          ))}
        </div>
      </div>
    </>
  );
};

export default featuredProduct;
featuredProduct.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.BASE_URL}/components/`);
  const products = await res.json();
  const paths = products.data?.map((product) => ({
    params: {
      featured: product.category,
      id: product.id,
    },
  }));

  return { paths, fallback: false }; // * true and Blocking
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `${process.env.BASE_URL}/components/featured/${params.featured}`
  );
  const data = await res.json();
  return {
    props: {
      product: data,
    },
  };
};
