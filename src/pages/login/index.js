import RootLayout from "@/components/Layout/RootLayout";
import { signIn } from "next-auth/react";
import React from "react";

const logIn = () => {
  return (
    <div className='flex justify-center items-center h-[70vh] flex-col'>
      <button
        onClick={() =>
          signIn("google", {
            callbackUrl:
              "https://assignment-6-server-711i140yn-shakhawatsalam.vercel.app/",
          })
        }
        className='btn btn-wide'>
        Sign In With Google
      </button>

      <button
        onClick={() =>
          signIn("github", {
            callbackUrl:
              "https://assignment-6-server-711i140yn-shakhawatsalam.vercel.app/",
          })
        }
        className='btn btn-wide mt-10'>
        Sign in With GitHub
      </button>
    </div>
  );
};

export default logIn;

logIn.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};
