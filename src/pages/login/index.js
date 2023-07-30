import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const logIn = () => {
  return (
    <div className='flex justify-center items-center h-[70vh] flex-col'>
      <button className='btn btn-wide'>Sign In With Google</button>

      <button className='btn btn-wide mt-10'>Sign in With GitHub</button>
    </div>
  );
};

export default logIn;

logIn.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};
