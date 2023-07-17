import { useParams } from 'react-router-dom';
import ProductData from '../data/ProductData';
import CategoriesNavBar from '../components/Categories';
import ProductCard from '../components/ProductCard';

function Shop() {
  const { category } = useParams();
  let products = ProductData;

  if (category !== 'All') {
    products = ProductData.filter((product) => product.category === category);
  }

  return (
    <>
      <p>Shop/{category}</p>
      <ul>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          );
        })}
      </ul>
    </>
  );
}

export default Shop;
