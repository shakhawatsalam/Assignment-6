import { Inter } from "next/font/google";

import RootLayout from "@/components/Layout/RootLayout";
import Banner from "@/components/UI/Banner";
import ProductCart from "@/components/UI/ProductCart";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ allProducts }) {
  return (
    <>
      <Banner />
      <ProductCart allProducts={allProducts} />
    </>
  );
}

Home.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:5000/components");
  const data = await res.json();

  return {
    props: {
      allProducts: data,
    },
    // revalidate: 10, // * After some time it will be refetch for UI data updates
  };
};
