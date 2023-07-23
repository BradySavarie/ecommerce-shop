import React from 'react';
import { Product } from '../data/ProductData';
import { Link, useParams } from 'react-router-dom';
import {
  Container,
  CardActionArea,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@mui/material';
import {
  StyledProductCard,
  StyledCardMedia,
} from './styles/ProductCard.styled';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useShoppingCart } from '../context/ShoppingCartContextProvider';

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { category } = useParams();
  const {
    getProductQuantity,
    incrementCartQuantity,
    decrementCartQuantity,
    openCart,
  } = useShoppingCart();
  const quantity = getProductQuantity(product.id);

  return (
    <StyledProductCard>
      <CardActionArea>
        <Link to={`/catalog/${category}/${product.id}`}>
          <StyledCardMedia
            component="img"
            image={product.image}
            alt="product image"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {product.model}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.manufacturer}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          variant="outlined"
          onClick={openCart}
        >
          <ShoppingCartIcon />
        </Button>
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
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
      </CardActions>
    </StyledProductCard>
  );
};

export default ProductCard;
