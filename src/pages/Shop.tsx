import { useParams } from 'react-router-dom';
import ProductData from '../data/ProductData';
import ProductCard from '../components/ProductCard';
import { Grid, Typography, Container, Box } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { ProductFilter } from '../components/ProductFilter';

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
      <Container sx={{ mb: 4, display: 'flex' }}>
        <ProductFilter />
        <Grid
          container
          sx={{
            justifyContent: 'center',
          }}
        >
          {products.map((product) => {
            return (
              <Grid item key={product.id}>
                <Box p={1}>
                  <ProductCard product={product} />
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}

export default Shop;
