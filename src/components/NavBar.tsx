import { Link } from 'react-router-dom';
import StyledNavBar from './styles/NavBar.styled';
import SearchBar from './SearchBar';
import { Typography, Container } from '@mui/material';
import ShoppingCartButton from './ShoppingCartButton';
import Categories from './Categories';

const NavBar = () => {
  return (
    <>
      <Container
        disableGutters
        maxWidth={false}
        sx={{ position: 'sticky', top: '0', zIndex: '999' }}
      >
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
      </Container>
    </>
  );
};

export default NavBar;
