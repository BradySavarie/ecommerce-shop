import { Drawer, Stack, Typography, Container } from '@mui/material';
import { createContext, useContext, ReactNode, useState } from 'react';
import { CartProduct } from '../components/CartProduct';
import CloseIcon from '@mui/icons-material/Close';
import ProductData from '../data/ProductData';

type ShoppingCartContextProviderProps = {
  children: ReactNode;
};

type ShoppingCartContext = {
  openCart: () => void;
  closeCart: () => void;
  getProductQuantity: (id: string) => number;
  incrementCartQuantity: (id: string) => void;
  decrementCartQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
  cartQuantity: number;
  cartProducts: CartProduct[];
};

type CartProduct = {
  id: string;
  quantity: number;
  price: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartContextProvider({
  children,
}: ShoppingCartContextProviderProps) {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const cartQuantity = cartProducts.reduce(
    (quantity, product) => product.quantity + quantity,
    0
  );
  const cartTotal = cartProducts.reduce(
    (total, product) => product.price * product.quantity + total,
    0
  );

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  function getProductQuantity(id: string) {
    return cartProducts.find((item) => item.id === id)?.quantity || 0;
  }
  function incrementCartQuantity(id: string) {
    return setCartProducts((currProducts) => {
      const currProduct = ProductData.find((product) => product.id === id);
      if (
        currProducts.find((product) => product.id === id) == null &&
        currProduct !== undefined
      ) {
        return [
          ...currProducts,
          { id, quantity: 1, price: currProduct?.price },
        ];
      } else {
        return currProducts.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          } else {
            return product;
          }
        });
      }
    });
  }
  function decrementCartQuantity(id: string) {
    return setCartProducts((currProducts) => {
      if (currProducts.find((product) => product.id === id)?.quantity === 1) {
        return currProducts.filter((product) => product.id !== id);
      } else {
        return currProducts.map((product) => {
          if (product.id === id) {
            return { ...product, quantity: product.quantity - 1 };
          } else {
            return product;
          }
        });
      }
    });
  }
  function removeFromCart(id: string) {
    setCartProducts((currProducts) => {
      return currProducts.filter((product) => product.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        openCart,
        closeCart,
        getProductQuantity,
        incrementCartQuantity,
        decrementCartQuantity,
        removeFromCart,
        cartQuantity,
        cartProducts,
      }}
    >
      {children}
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
              {cartQuantity} products
            </Typography>
            <Typography variant="body1" fontWeight="600">
              Total: ${cartTotal}
            </Typography>
          </Container>
        </Container>
      </Drawer>
    </ShoppingCartContext.Provider>
  );
}
