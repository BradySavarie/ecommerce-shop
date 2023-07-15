import styled from 'styled-components';

const StyledSearchBar = styled.div`
  .searchBar {
    display: flex;
  }

  .searchInput {
    background-color: white;
    border: none;
    border-radius: 2px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    outline: 1px solid grey;
    font-size: 15px;
    padding: 15px;
    height: 30px;
    width: 45vw;
    box-shadow:
      0 4px 6px -1px rgb(0 0 0 / 0.1),
      0 2px 4px -2px rgb(0 0 0 / 0.1);
  }

  .searchIcon {
    height: 30px;
    width: 30px;
    background-color: grey;
    outline: 1px solid grey;
    display: grid;
    place-items: center;
    box-shadow:
      0 4px 6px -1px rgb(0 0 0 / 0.1),
      0 2px 4px -2px rgb(0 0 0 / 0.1);
  }

  .searchInput:focus {
    outline: none;
  }

  .searchIcon svg {
    fill: white;
    font-size: 24px;
  }

  .dataResult {
    margin-top: 5px;
    max-height: 200px;
    width: 200px;
    background-color: white;
    box-shadow:
      0 4px 6px -1px rgb(0 0 0 / 0.1),
      0 2px 4px -2px rgb(0 0 0 / 0.1);
    overflow: hidden;
    overflow-y: auto;
  }

  .dataResult::-webkit-scrollbar {
    display: none;
  }

  .dataResult .product {
    padding-left: 10px;
    height: 50px;
    width: 200px;
    display: flex;
    align-items: center;
    color: black;
    text-decoration: none;

    &:hover {
      background-color: lightgrey;
    }
  }

  #clearBtn {
    cursor: pointer;
  }
`;

export default StyledSearchBar;
