import { Typography, Container, Stack, Button } from '@mui/material';
import { useShoppingCart } from '../context/ShoppingCartContextProvider';
import ProductData from '../data/ProductData';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

type CartProductProps = {
  id: string;
  quantity: number;
};

export const CartProduct = ({ id, quantity }: CartProductProps) => {
  const {
    removeFromCart,
    incrementCartQuantity,
    decrementCartQuantity,
    cartQuantity,
    cartProducts,
  } = useShoppingCart();

  const product = ProductData.find((product) => product.id === id);

  if (product === null || product === undefined) return null;

  return (
    <Container
      disableGutters
      sx={{ bgcolor: 'grey.50', padding: (theme) => theme.spacing(2) }}
    >
      <Stack
        direction="row"
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
        }}
      >
        <img
          src={product?.image}
          style={{
            width: '75px',
            height: '75px',
            objectFit: 'contain',
          }}
        />
        <Container>
          <Typography variant="body1">{product?.model}</Typography>
          <Typography variant="body2">{product?.manufacturer}</Typography>
          <Typography variant="body2" color={'primary.main'}>
            ${product?.price}
          </Typography>
        </Container>
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
            onClick={() => incrementCartQuantity(product?.id)}
          >
            <KeyboardArrowUpIcon />
          </Button>
          <Typography variant="body1" fontWeight="700">
            {quantity}
          </Typography>
          <Button
            color="primary"
            variant="text"
            onClick={() => decrementCartQuantity(product?.id)}
          >
            <KeyboardArrowDownIcon />
          </Button>
        </Container>
      </Stack>
    </Container>
  );
};
