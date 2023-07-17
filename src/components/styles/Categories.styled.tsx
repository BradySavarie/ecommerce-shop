import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledCategories = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.grey[50]};
  box-shadow: ${({ theme }) => theme.shadows[1]};
`;

export const LinkContainer = styled('div')`
  margin: ${({ theme }) => theme.spacing(1)};
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.grey[900]};

  &.active {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;
