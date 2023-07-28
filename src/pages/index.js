import Image from "next/image";
import { Inter } from "next/font/google";
import RootLayout from "./component/Layout/RootLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1 className="h-[100vh]">Hello World</h1>
    </>
  );
}

Home.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};
