import styled from 'styled-components';

const StyledNavBar = styled.div`
  position: relative;
  display: flex;
  padding: ${({ theme }) => {
    const { spacing } = theme;
    return `${spacing(2)} ${spacing(8)}`;
  }};
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.grey[50]};
  box-shadow: ${({ theme }) => theme.shadows[3]};

  .logo,
  .shopLink {
    text-decoration: none;
    color: ${({ theme }) => theme.palette.grey[900]};
  }

  .logo:hover {
    color: ${({ theme }) => theme.palette.grey[800]};
  }
`;

export default StyledNavBar;
