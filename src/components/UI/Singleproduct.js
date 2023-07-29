import Image from "next/image";
import Link from "next/link";

const Singleproduct = ({ product }) => {
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
            <Link
              href={`productdetails/${product._id}`}
              className='btn btn-primary'>
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleproduct;
