import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProductData from '../data/ProductData';
import ProductCard from '../components/ProductCard';
import { Grid, Typography, Container, Box } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { ProductFilter } from '../components/ProductFilter';
import { Product } from '../data/ProductData';

function Shop() {
  const { category } = useParams();
  const [currentProducts, setCurrentProducts] = useState(ProductData);
  const [filteredProducts, setFilteredProducts] = useState(currentProducts);
  const [selectedManufacturers, setSelectedManufacturers] = useState<String[]>(
    []
  );

  useEffect(() => {
    if (category !== 'All') {
      setCurrentProducts(
        ProductData.filter((product) => product.category === category)
      );
    } else {
      setCurrentProducts(ProductData);
    }
  }, [category]);

  useEffect(() => {
    // if no filters are applied, show all current products
    filterProducts();
    // when selectedManufacturers or currentProducts change, update filtered products. render only filtered products.
  }, [selectedManufacturers, currentProducts]);

  function filterProducts() {
    // If no filters are applied, show all current products
    if (selectedManufacturers.length === 0) {
      setFilteredProducts(currentProducts);
    } else {
      // Filter products based on selected manufacturers
      const filteredProducts = currentProducts.filter((product) =>
        selectedManufacturers.includes(product.manufacturer)
      );
      setFilteredProducts(filteredProducts);
    }
  }

  function filterByManufacturer(manufacturer: String, isChecked: Boolean) {
    if (isChecked) {
      if (!selectedManufacturers.includes(manufacturer)) {
        setSelectedManufacturers((prev) => [...prev, manufacturer]);
      }
    } else {
      setSelectedManufacturers((prev) =>
        prev.filter((item) => item !== manufacturer)
      );
    }
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
        <ProductFilter filterByManufacturer={filterByManufacturer} />
        <Grid
          container
          sx={{
            justifyContent: 'center',
          }}
        >
          {filteredProducts.map((product: Product) => {
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
