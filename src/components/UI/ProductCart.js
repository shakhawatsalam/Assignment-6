import Singleproduct from "./Singleproduct";

const ProductCart = ({ allProducts }) => {
  return (
    <>
      <h1 className='text-center text-6xl'>All Products</h1>
      <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
        <div className='flex items-center justify-center mb-5'></div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {allProducts.data?.slice(0, 6).map((product) => (
            <Singleproduct product={product} key={product._id}></Singleproduct>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductCart;

ProductCart.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};
