import { Divider, Container, Box } from '@mui/material';
import {
  StyledCategories,
  LinkContainer,
  StyledLink,
} from './styles/Categories.styled';

const Categories = () => {
  const categories = [
    'All',
    'Boost',
    'Overdrive',
    'Distortion',
    'Fuzz',
    'Delay',
    'Reverb',
  ];

  return (
    <>
      <StyledCategories>
        <Container>
          <Divider />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              overflowX: 'auto',
            }}
          >
            {categories.map((category) => (
              <LinkContainer key={category}>
                <StyledLink to={`/catalog/${category}`}>{category}</StyledLink>
              </LinkContainer>
            ))}
          </Box>
        </Container>
      </StyledCategories>
    </>
  );
};

export default Categories;
