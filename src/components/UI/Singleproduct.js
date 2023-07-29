import Image from "next/image";

const Singleproduct = ({ product }) => {
  console.log(product);
  return (
    <div>
      <div className='card w-96 glass'>
        <figure>
          <Image width={300} height={300} src={product.image} alt='car!' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{product.productName}</h2>
          <h3 className='font-bold'>Category: {product.category}</h3>
          <h3 className='font-bold'>Price: {product.price}</h3>
          <h3 className='font-bold'>Status: {product.status}</h3>
          <h3 className='font-bold'>Rating: {product.averageRating}</h3>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleproduct;
