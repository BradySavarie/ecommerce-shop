import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Link to="/">Effects Pedals</Link>
      <NavLink to="/shop/all">Shop</NavLink>
    </div>
  );
};

export default NavBar;
