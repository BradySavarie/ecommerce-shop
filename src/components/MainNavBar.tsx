import { Link, NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';

const MainNavBar = () => {
  return (
    <div>
      <Link to="/">Effects Pedals</Link>
      <NavLink to="/Shop/All">Shop</NavLink>
      <SearchBar />
    </div>
  );
};

export default MainNavBar;
