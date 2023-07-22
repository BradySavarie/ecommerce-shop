import { createContext, useContext, ReactNode, useState } from 'react';

type ShoppingCartContextProviderProps = {
  children: ReactNode;
};

type ShoppingCartContext = {
  getProductQuantity: (id: string) => number;
  incrementCartQuantity: (id: string) => void;
  decrementCartQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
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
        getProductQuantity,
        incrementCartQuantity,
        decrementCartQuantity,
        removeFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
