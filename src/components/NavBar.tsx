import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Link to="/">Effects Pedals</Link>
      <NavLink to="/Shop/All">Shop</NavLink>
    </div>
  );
};

export default NavBar;
