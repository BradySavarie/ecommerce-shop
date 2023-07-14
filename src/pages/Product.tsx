import { useParams } from 'react-router-dom';
import ProductData from '../data/ProductData';
import ProductCard from '../components/ProductCard';

const Product = () => {
  const { productId } = useParams();
  const product = ProductData.find((product) => product.id === productId);
  if (product !== undefined)
    return (
      <>
        <h1>Product Page</h1>
        <ProductCard product={product} />
      </>
    );
};

export default Product;
