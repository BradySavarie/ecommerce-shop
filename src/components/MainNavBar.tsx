import { Link, NavLink } from 'react-router-dom';
import StyledMainNavBar from './styles/MainNavBar.styled';
import SearchBar from './SearchBar';
import { Typography } from '@mui/material';

const MainNavBar = () => {
  return (
    <StyledMainNavBar>
      <Link to="/" className="logo">
        <Typography variant="h1" fontFamily="Lobster">
          Effects Pedals
        </Typography>
      </Link>
      <SearchBar />
      <NavLink to="/Shop/All" className="shopLink">
        <Typography variant="h6" fontFamily="Source Sans 3">
          Shop
        </Typography>
      </NavLink>
    </StyledMainNavBar>
  );
};

export default MainNavBar;
