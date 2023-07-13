import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/Shop/All">
        <button>Shop Now</button>
      </Link>
    </>
  );
}

export default Home;
