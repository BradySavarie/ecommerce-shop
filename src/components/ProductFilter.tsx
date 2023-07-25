import { Container, Divider, Typography } from '@mui/material';
import { StyledProductFilter } from './styles/ProductFilter.styled';
import ProductData from '../data/ProductData';
import { ChangeEvent } from 'react';

type ProductFilterProps = {
  filterByManufacturer: (manufacturer: String, isChecked: Boolean) => void;
};

export function ProductFilter(props: ProductFilterProps) {
  const { filterByManufacturer } = props;
  const manufacturers: string[] = [];

  ProductData.forEach((product) => {
    if (!manufacturers.includes(product.manufacturer)) {
      manufacturers.push(product.manufacturer);
    }
  });

  function handleCheckboxChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, checked } = e.target;
    filterByManufacturer(name, checked);
  }
  /* 
  create method that filters products by brand (lift state up). receives brand as input, no output
  for each manufacturer, create a checkbox element with a label that matches the manufacturer. When checkbox is clicked the filter method is called with the value of the brand that was clicked.
  */

  return (
    <StyledProductFilter>
      <Typography variant="h6" fontWeight="600">
        Shop By Brand
      </Typography>
      <Divider sx={{ marginY: (theme) => theme.spacing(1) }} />
      {manufacturers.map((manufacturer) => (
        <Container
          disableGutters
          key={manufacturer}
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: (theme) => theme.spacing(3),
            marginY: (theme) => theme.spacing(1),
          }}
        >
          <input
            type="checkbox"
            name={manufacturer}
            onChange={handleCheckboxChange}
          />
          <Typography variant="body2" color={'GrayText'}>
            {manufacturer}
          </Typography>
        </Container>
      ))}
    </StyledProductFilter>
  );
}
