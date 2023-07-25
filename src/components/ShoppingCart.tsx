import { useShoppingCart } from '../context/ShoppingCartContextProvider';
import { Drawer, Container, Typography, Stack } from '@mui/material';
import { CartProduct } from './CartProduct';
import CloseIcon from '@mui/icons-material/Close';

export function ShoppingCart() {
  const { isOpen, closeCart, cartProducts, cartQuantity, cartTotal } =
    useShoppingCart();

  return (
    <Drawer anchor="right" open={isOpen} onClose={closeCart}>
      <Container
        sx={{
          minWidth: '35vw',
          padding: (theme) => theme.spacing(2),
        }}
      >
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
          }}
        >
          <Typography
            variant="h3"
            fontWeight="500"
            fontFamily="Lobster"
            sx={{ mb: '30px' }}
          >
            Cart
          </Typography>
          <CloseIcon
            sx={{
              cursor: 'pointer',
              '&:hover': {
                color: 'primary.main',
              },
            }}
            onClick={closeCart}
          />
        </Container>
        <Stack spacing={2} sx={{ mb: '30px' }}>
          {cartProducts.map((product) => (
            <CartProduct key={product.id} {...product} />
          ))}
        </Stack>
        <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body1" fontWeight="600">
            {cartQuantity} Products
          </Typography>
          <Typography variant="body1" fontWeight="600">
            Total: ${cartTotal}
          </Typography>
        </Container>
      </Container>
    </Drawer>
  );
}
