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
    outline: 1px solid ${({ theme }) => theme.palette.grey[500]};
    font-size: 15px;
    padding: 15px;
    height: 30px;
    width: 40vw;
    box-shadow: ${({ theme }) => theme.shadows[1]};
    margin-left: ${({ theme }) => theme.spacing(2)};
  }

  .searchIcon {
    height: 30px;
    width: 30px;
    background-color: ${({ theme }) => theme.palette.primary.main};
    outline: 1px solid ${({ theme }) => theme.palette.grey[500]};
    display: grid;
    place-items: center;
    box-shadow:
      0 4px 6px -1px rgb(0 0 0 / 0.1),
      0 2px 4px -2px rgb(0 0 0 / 0.1);
    margin-right: ${({ theme }) => theme.spacing(2)};
  }

  .searchInput,
  .searchIcon {
    @media (max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
      display: none;
    }
  }

  .searchInput:focus {
    outline: 1px solid ${({ theme }) => theme.palette.grey[900]};
  }

  .searchIcon svg {
    fill: white;
    font-size: 24px;
  }

  .dataResult {
    position: absolute;
    z-index: 999;
    margin-top: 5px;
    max-height: 200px;
    width: 200px;
    background-color: white;
    box-shadow:
      0 4px 6px -1px rgb(0 0 0 / 0.1),
      0 2px 4px -2px rgb(0 0 0 / 0.1);
    overflow: hidden;
    overflow-y: auto;
    margin-left: ${({ theme }) => theme.spacing(2)};
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
