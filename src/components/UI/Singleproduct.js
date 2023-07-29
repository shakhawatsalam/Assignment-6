import Image from "next/image";

const Singleproduct = ({ product }) => {
    console.log(product)
  return (
    <div>
      <div className='card w-96 glass'>
        <figure>
          <Image width={300} height={300} src={product.image} alt='car!' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{product.productName}</h2>
          <p>How to park your car at your garage?</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>Learn now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleproduct;
