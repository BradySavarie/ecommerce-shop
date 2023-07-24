import { Container } from '@mui/material';
import styled from 'styled-components';

export const StyledProductFilter = styled(Container)`
  height: calc(68vh - 16px);
  width: 25vw;
  background-color: ${({ theme }) => theme.palette.grey[50]};
  box-shadow: ${({ theme }) => theme.shadows[1]};
  margin-top: ${({ theme }) => theme.spacing(1)};

  @media (max-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
    display: none;
  }
`;
