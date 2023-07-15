import { DataContext } from '../components/DataContextProvider';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import uniqid from 'uniqid';

import ProductCard from '../components/ProductCard';

const Product = () => {
  const { products } = useContext(DataContext);
  const { category, productId } = useParams();

  // Search & Filter Product Data
  const product = products.find((product) => product.id === productId);
  const similarProducts = products.filter(
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
