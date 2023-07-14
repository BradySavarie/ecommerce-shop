import React from 'react';
import { Product } from '../data/ProductData';
import { Link, useParams } from 'react-router-dom';

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { category } = useParams();
  return (
    <Link to={`/Shop/${category}/${product.id}`}>
      <p>{product.name}</p>
      <p>{product.manufacturer}</p>
    </Link>
  );
};

export default ProductCard;
