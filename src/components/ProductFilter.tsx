import { Divider, Typography } from '@mui/material';
import { StyledProductFilter } from './styles/ProductFilter.styled';

export function ProductFilter() {
  return (
    <StyledProductFilter>
      <Typography variant="h6" fontWeight="600">
        Shop By Brand
      </Typography>
      <Divider />
    </StyledProductFilter>
  );
}
