import { Container } from '@mui/material';
import styled from 'styled-components';

export const StyledProductPage = styled(Container)`
  min-width: min-content;
  display: flex;
  gap: ${({ theme }) => theme.spacing(5)};
  min-height: 70vh;
  padding: ${({ theme }) => theme.spacing(5)};
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows[2]};
  background-color: ${({ theme }) => theme.palette.grey[50]};

  .information {
    display: flex;
    flex-direction: column;
    justify-content: space-apart;
  }

  .header {
    padding: ${({ theme }) => theme.spacing(3)}
      ${({ theme }) => theme.spacing(4)};
  }

  .description {
    padding-left: ${({ theme }) => theme.spacing(4)};
  }

  .controls {
    display: flex;
    padding: ${({ theme }) => theme.spacing(3)}
      ${({ theme }) => theme.spacing(4)};
  }

  .quantity {
    display: flex;
    align-items: center;
  }
`;
