import { useContext } from 'react';
import { DataContext } from './DataContextProvider';
import StyledSearchBar from './styles/SearchBar.styled';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  const { products } = useContext(DataContext);

  return (
    <StyledSearchBar>
      <div className="search">
        <div className="searchInputs">
          <input type="search" placeholder="Enter Effect Name..." />
          <div className="searchIcon">
            <Search />
          </div>
        </div>
        <div className="dataResult"></div>
      </div>
    </StyledSearchBar>
  );
};
export default SearchBar;
