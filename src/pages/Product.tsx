import { DataContext } from '../context/DataContextProvider';
import { useContext } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import ProductCard from '../components/ProductCard';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { StyledProductPage } from '../components/styles/ProductPage.styled';
import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useShoppingCart } from '../context/ShoppingCartContextProvider';

const Product = () => {
  const { products } = useContext(DataContext);
  const {
    getProductQuantity,
    incrementCartQuantity,
    decrementCartQuantity,
    openCart,
    cartQuantity,
  } = useShoppingCart();
  const { category, productId } = useParams();

  // Search & Filter Product Data
  const product = products.find((product) => product.id === productId);

  const similarProducts = products.filter(
    (product) => product.category === category && product.id !== productId
  );

  if (product) {
    const quantity = getProductQuantity(product.id);
    return (
      <>
        <Container sx={{ marginY: 2 }}>
          <Typography sx={{ display: 'flex', alignItems: 'center' }}>
            Catalog
            <KeyboardArrowRightIcon />
            {product.category}
            <KeyboardArrowRightIcon />
            {product.model}
          </Typography>
        </Container>

        <StyledProductPage>
          <img src={product.image} height="350px" />

          <Container className="information">
            <Container className="header">
              <Container
                disableGutters
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '5',
                }}
              >
                <Typography variant="h4" component="div">
                  {product.model}
                </Typography>
                <Typography variant="h5" fontWeight={700} color="primary.main">
                  ${product.price}
                </Typography>
              </Container>
              <Typography variant="body1" color="text.secondary">
                {product.manufacturer}
              </Typography>
            </Container>

            <Container className="description">
              <Typography variant="body2">{product.description}</Typography>
            </Container>

            <Container className="controls">
              <Button
                size="small"
                color="primary"
                variant="outlined"
                onClick={() => {
                  if (cartQuantity > 0) {
                    openCart();
                  }
                }}
              >
                <ShoppingCartIcon />
              </Button>
              <Container className="quantity">
                <Button
                  color="primary"
                  variant="text"
                  onClick={() => incrementCartQuantity(product.id)}
                >
                  <KeyboardArrowUpIcon />
                </Button>
                <Typography variant="body1" fontWeight="700">
                  {quantity}
                </Typography>
                <Button
                  color="primary"
                  variant="text"
                  onClick={() => decrementCartQuantity(product.id)}
                >
                  <KeyboardArrowDownIcon />
                </Button>
              </Container>
            </Container>
          </Container>
        </StyledProductPage>

        <h1>Similar Products</h1>
        <div key={product.id}>
          {similarProducts.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </>
    );
  } else {
    return <Navigate to="/" />;
  }
};

export default Product;
