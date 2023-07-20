import { useParams } from 'react-router-dom';
import ProductData from '../data/ProductData';
import ProductCard from '../components/ProductCard';
import { Grid } from '@mui/material';

function Shop() {
  const { category } = useParams();
  let products = ProductData;

  if (category !== 'All') {
    products = ProductData.filter((product) => product.category === category);
  }

  return (
    <>
      <p>Shop/{category}</p>
      <Grid container spacing={2}>
        {products.map((product) => {
          return (
            <Grid item key={product.id}>
              <ProductCard product={product} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default Shop;
