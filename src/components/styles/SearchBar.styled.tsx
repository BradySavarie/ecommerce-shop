import styled from 'styled-components';

const StyledSearchBar = styled.div`
  .searchInputs {
    display: flex;
  }

  .search input {
    background-color: white;
    border: 0;
    border-radius: 2px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    font-size: 15px;
    padding: 15px;
    height: 30px;
    width: 200px;
    box-shadow:
      0 4px 6px -1px rgb(0 0 0 / 0.1),
      0 2px 4px -2px rgb(0 0 0 / 0.1);
  }

  .searchIcon {
    height: 30px;
    width: 30px;
    background-color: grey;
    display: grid;
    place-items: center;
    box-shadow:
      0 4px 6px -1px rgb(0 0 0 / 0.1),
      0 2px 4px -2px rgb(0 0 0 / 0.1);
  }

  input:focus {
    outline: none;
  }

  .searchIcon svg {
    fill: white;
    font-size: 24px;
  }
`;

export default StyledSearchBar;
