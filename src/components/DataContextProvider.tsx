import { createContext, ReactNode } from 'react';
import ProductData, { Product } from '../data/ProductData';

type DataContextValue = {
  products: Product[];
};

type DataContextProviderProps = {
  children: ReactNode;
};

const DataContext = createContext<DataContextValue>({ products: [] });

const DataContextProvider: React.FC<DataContextProviderProps> = ({
  children,
}) => {
  return (
    <DataContext.Provider value={{ products: ProductData }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
