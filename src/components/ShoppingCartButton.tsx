import { Badge } from '@mui/material';
import StyledShoppingCartButton from './styles/ShoppingCartButton.styled';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ShoppingCartButton = () => {
  return (
    <>
      <StyledShoppingCartButton>
        <div className="cartIcon">
          <Badge badgeContent={1}>
            <ShoppingCartIcon />
          </Badge>
        </div>
      </StyledShoppingCartButton>
    </>
  );
};

export default ShoppingCartButton;
