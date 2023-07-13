import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Categories = () => {
  const { category } = useParams();

  return (
    <>
      <p>Shop/{category}</p>

      <ul>
        <li>
          <Link to="/Shop/All">All</Link>
        </li>
        <li>
          <Link to="/Shop/Boost">Boost</Link>
        </li>
        <li>
          <Link to="/Shop/Overdrive">Overdrive</Link>
        </li>
        <li>
          <Link to="/Shop/Distortion">Distortion</Link>
        </li>
        <li>
          <Link to="/Shop/Fuzz">Fuzz</Link>
        </li>
        <li>
          <Link to="/Shop/Delay">Delay</Link>
        </li>
        <li>
          <Link to="/Shop/Reverb">Reverb</Link>
        </li>
      </ul>
    </>
  );
};

export default Categories;
