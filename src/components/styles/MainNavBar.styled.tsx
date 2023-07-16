import styled from 'styled-components';

const StyledMainNavBar = styled.div`
  position: relative;
  display: flex;
  padding: 15px 5vw;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);

  .logo,
  .shopLink {
    text-decoration: none;
    color: black;
  }
`;

export default StyledMainNavBar;
