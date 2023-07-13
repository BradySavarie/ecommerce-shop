import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Categories = () => {
  const { category } = useParams();

  return (
    <>
      <p>Shop/{category}</p>

      <ul>
        <li>
          <Link to="/shop/distortion">Distortion</Link>
        </li>
      </ul>
    </>
  );
};

export default Categories;
