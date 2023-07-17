import { Link } from 'react-router-dom';
import StyledHome from './styles/Home.styled';
import { Typography, Container, Button } from '@mui/material';

function Home() {
  return (
    <>
      <StyledHome>
        <Container sx={{ py: 16, px: 8 }}>
          <Typography
            variant="h2"
            color="grey[900]"
            fontWeight="600"
            fontFamily="Source Sans 3"
            sx={{ mb: 1 }}
          >
            Find Your Dream Tone
          </Typography>
          <Typography
            variant="body1"
            color="grey[900]"
            fontWeight="600"
            fontFamily="Source Sans 3"
            sx={{ mb: 2 }}
          >
            Unleash your creativity and elevate your sound with our collection
            of audio effects equipment
          </Typography>
          <Link to="/Shop/All">
            <Button variant="contained">View Catalog</Button>
          </Link>
        </Container>
      </StyledHome>
    </>
  );
}

export default Home;
