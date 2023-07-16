import { useContext, useState, ChangeEvent } from 'react';
import { DataContext } from '../context/DataContextProvider';
import StyledSearchBar from './styles/SearchBar.styled';
import Search from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { Product } from '../data/ProductData';

const SearchBar = () => {
  const { products } = useContext(DataContext);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [currentInputValue, setCurrentInputValue] = useState('');

  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const inputData = e.target.value;
    setCurrentInputValue(inputData);
    const updatedFilter = products.filter((product) => {
      return product.model.toLowerCase().includes(inputData.toLowerCase());
    });

    if (inputData === '') {
      setFilteredProducts([]);
    } else {
      setFilteredProducts(updatedFilter);
    }
  };

  const clearInput = () => {
    setFilteredProducts([]);
    setCurrentInputValue('');
  };

  return (
    <StyledSearchBar>
      <div className="searchBar">
        <input
          className="searchInput"
          type="search"
          placeholder="Enter Effect Name..."
          onChange={handleFilter}
          value={currentInputValue}
        />
        <div className="searchIcon">
          {filteredProducts.length === 0 ? (
            <Search />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredProducts.length > 0 && (
        <div className="dataResult">
          {filteredProducts.slice(0, 15).map((product) => {
            return (
              <Link
                className="product"
                to={`/Shop/${product.category}/${product.id}`}
                onClick={clearInput}
              >
                {product.model}
              </Link>
            );
          })}
        </div>
      )}
    </StyledSearchBar>
  );
};
export default SearchBar;
