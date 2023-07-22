import { createContext, useContext, ReactNode } from 'react';

type ShoppingCartContextProviderProps = {
  children: ReactNode;
};

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartContextProvider({
  children,
}: ShoppingCartContextProviderProps) {
  return (
    <ShoppingCartContext.Provider value={ShoppingCartContext}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
