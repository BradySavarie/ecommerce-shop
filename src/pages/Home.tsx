import { Link } from 'react-router-dom';
import StyledHome from './styles/Home.styled';

function Home() {
  return (
    <>
      <StyledHome>
        <h1>Home Page</h1>
        <Link to="/Shop/All">
          <button>Shop Now</button>
        </Link>
      </StyledHome>
    </>
  );
}

export default Home;
