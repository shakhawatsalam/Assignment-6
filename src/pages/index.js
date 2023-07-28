import Image from "next/image";
import { Inter } from "next/font/google";
import RootLayout from "./component/Layout/RootLayout";
import Banner from "./component/Banner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Banner />
    </>
  );
}

Home.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};
