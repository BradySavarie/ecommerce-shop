import styled from 'styled-components';
import { Card, CardMedia } from '@mui/material';

interface StyledCardMediaProps {
  component: string; // Add the 'component' prop to the interface
  image: string;
  alt: string;
}

export const StyledProductCard = styled(Card)`
  width: 275px;
  padding: 10px;
  box-shadow: ${({ theme }) => theme.shadows[1]};

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.palette.grey[900]};
  }
`;

export const StyledCardMedia = styled(CardMedia)<StyledCardMediaProps>`
  max-height: 140px;
  max-width: 100%;
  object-fit: contain;
`;
