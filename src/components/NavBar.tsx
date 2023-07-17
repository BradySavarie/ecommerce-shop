import { Link } from 'react-router-dom';
import StyledNavBar from './styles/NavBar.styled';
import SearchBar from './SearchBar';
import { Typography } from '@mui/material';
import ShoppingCartButton from './ShoppingCartButton';
import Categories from './Categories';

const NavBar = () => {
  return (
    <>
      <StyledNavBar>
        <Link to="/" className="logo">
          <Typography variant="h4" fontFamily="Lobster">
            Audio Effects
          </Typography>
        </Link>
        <SearchBar />
        <ShoppingCartButton />
      </StyledNavBar>
      <Categories />
    </>
  );
};

export default NavBar;
