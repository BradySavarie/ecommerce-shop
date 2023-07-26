import styled from 'styled-components';
import backgroundImg from '../../assets/background.jpg';

const StyledHome = styled.div`
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  flex-grow: 1;
`;

export default StyledHome;
