import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const CategoriesNavBar = () => {
  const { category } = useParams();
  const categories = [
    'All',
    'Boost',
    'Overdrive',
    'Distortion',
    'Fuzz',
    'Delay',
    'Reverb',
  ];

  return (
    <>
      <p>Shop/{category}</p>

      <ul>
        {categories.map((category) => (
          <li>
            <Link to={`/Shop/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CategoriesNavBar;
