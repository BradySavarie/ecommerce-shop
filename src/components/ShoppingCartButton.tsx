import { Badge } from '@mui/material';
import StyledShoppingCartButton from './styles/ShoppingCartButton.styled';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useShoppingCart } from '../context/ShoppingCartContextProvider';

const ShoppingCartButton = () => {
  const { cartQuantity } = useShoppingCart();
  const { openCart } = useShoppingCart();
  return (
    <>
      <StyledShoppingCartButton onClick={openCart}>
        <div className="cartIcon">
          <Badge badgeContent={cartQuantity}>
            <ShoppingCartIcon />
          </Badge>
        </div>
      </StyledShoppingCartButton>
    </>
  );
};

export default ShoppingCartButton;
