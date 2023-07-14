import React from 'react';
import { Product } from '../data/ProductData';

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return <div>{product.name}</div>;
};

export default ProductCard;
