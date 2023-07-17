import { Link, NavLink } from 'react-router-dom';
import StyledNavBar from './styles/NavBar.styled';
import SearchBar from './SearchBar';
import { Typography } from '@mui/material';
import ShoppingCartButton from './ShoppingCartButton';

const NavBar = () => {
  return (
    <StyledNavBar>
      <Link to="/" className="logo">
        <Typography variant="h1" fontFamily="Lobster">
          Audio Effects
        </Typography>
      </Link>
      <SearchBar />
      <NavLink to="/Shop/All" className="shopLink">
        <Typography variant="h6" fontWeight="500" fontFamily="Source Sans 3">
          Shop
        </Typography>
      </NavLink>
      <ShoppingCartButton />
    </StyledNavBar>
  );
};

export default NavBar;
