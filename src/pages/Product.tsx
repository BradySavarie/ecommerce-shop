import { useParams } from 'react-router-dom';
import uniqid from 'uniqid';
import ProductData from '../data/ProductData';
import ProductCard from '../components/ProductCard';

const Product = () => {
  const { category, productId } = useParams();
  const product = ProductData.find((product) => product.id === productId);
  const similarProducts = ProductData.filter(
    (product) => product.category === category && product.id !== productId
  );

  return (
    <>
      <h1>Product Page</h1>
      {product && <ProductCard product={product} />}
      <h1>Similar Products</h1>
      <div key={uniqid()}>
        {similarProducts.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </>
  );
};

export default Product;
