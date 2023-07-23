import { Drawer, Stack, Typography, Container } from '@mui/material';
import { createContext, useContext, ReactNode, useState } from 'react';
import { CartProduct } from '../components/CartProduct';

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

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  function getProductQuantity(id: string) {
    return cartProducts.find((item) => item.id === id)?.quantity || 0;
  }
  function incrementCartQuantity(id: string) {
    return setCartProducts((currProducts) => {
      if (currProducts.find((product) => product.id === id) == null) {
        return [...currProducts, { id, quantity: 1 }];
      } else {
        return currProducts.map((product) => {
          if (product.id === id) {
            return { ...product, quantity: product.quantity + 1 };
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
          <Typography
            variant="h3"
            fontWeight="500"
            fontFamily="Lobster"
            sx={{ mb: '30px' }}
          >
            Cart
          </Typography>
          <Stack spacing={2}>
            {cartProducts.map((product) => (
              <CartProduct key={product.id} {...product} />
            ))}
          </Stack>
        </Container>
      </Drawer>
    </ShoppingCartContext.Provider>
  );
}
