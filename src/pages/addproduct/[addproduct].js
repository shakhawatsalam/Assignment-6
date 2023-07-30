import RootLayout from "@/components/Layout/RootLayout";
import AddPcBuilder from "@/components/UI/AddPcBuilder";
import { useRouter } from "next/router";

const addProduct = ({ product }) => {
    const router = useRouter();   
  return (
    <>
      <h1 className='text-center text-6xl'>{router.query.addproduct}</h1>
      <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
        <div className='flex items-center justify-center mb-5'></div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {product.data?.map((product) => (
            <AddPcBuilder product={product} key={product._id}></AddPcBuilder>
          ))}
        </div>
      </div>
    </>
  );
};

export default addProduct;

addProduct.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `${process.env.BASE_URL}/components/featured/${params.addproduct}`
  );
  const data = await res.json();
  return {
    props: {
      product: data,
    },
  };
};
