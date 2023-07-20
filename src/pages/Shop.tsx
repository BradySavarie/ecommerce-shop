import { useParams } from 'react-router-dom';
import ProductData from '../data/ProductData';
import ProductCard from '../components/ProductCard';
import { Grid, Typography, Container } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Shop() {
  const { category } = useParams();
  let products = ProductData;

  if (category !== 'All') {
    products = ProductData.filter((product) => product.category === category);
  }

  return (
    <>
      <Container sx={{ marginY: 2 }}>
        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
          Catalog
          <KeyboardArrowRightIcon />
          {category}
        </Typography>
      </Container>
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
