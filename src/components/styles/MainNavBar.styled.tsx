import styled from 'styled-components';

const StyledMainNavBar = styled.div`
  display: flex;
  padding: 15px 5vw;
  justify-content: space-between;
  align-items: center;
  background-color: white;

  .logo,
  .shopLink {
    text-decoration: none;
    color: black;
  }

  .logo {
    font-size: 15px;
  }
`;

export default StyledMainNavBar;
