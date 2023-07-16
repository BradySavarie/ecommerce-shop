import styled from 'styled-components';

const StyledMainNavBar = styled.div`
  position: relative;
  display: flex;
  padding: ${({ theme }) => {
    const { spacing } = theme;
    return `${spacing(2)} ${spacing(8)}`;
  }};
  justify-content: space-between;
  align-items: center;
  background-color: white;
  box-shadow: ${({ theme }) => theme.shadows[3]};

  .logo,
  .shopLink {
    text-decoration: none;
    color: black;
  }
`;

export default StyledMainNavBar;
