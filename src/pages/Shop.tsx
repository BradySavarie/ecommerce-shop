import { useParams } from 'react-router-dom';
import Categories from '../components/Categories';
import ProductData from '../data/ProductData';

function Shop() {
  const { category } = useParams();
  let products = ProductData;

  if (category !== 'All') {
    products = ProductData.filter((product) => product.category === category);
  }

  return (
    <>
      <h1>Shop Page</h1>
      <Categories />
      <div>
        {products.map((product) => {
          return <li key={product.id}>{product.name}</li>;
        })}
      </div>
    </>
  );
}

export default Shop;
