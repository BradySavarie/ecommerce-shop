import { Link, NavLink } from 'react-router-dom';

const MainNavBar = () => {
  return (
    <div>
      <Link to="/">Effects Pedals</Link>
      <NavLink to="/Shop/All">Shop</NavLink>
    </div>
  );
};

export default MainNavBar;
