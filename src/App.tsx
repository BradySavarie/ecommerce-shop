import { HashRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import StyledApp from './components/styles/App.styled';

const theme = createTheme({
  typography: {
    fontFamily: ['Lobster', 'Source Sans 3', 'sans-serif'].join(','),
    h1: { fontSize: '2.5rem' },
  },
  palette: {
    primary: {
      main: '#eca72c',
    },
    secondary: {
      main: '#537596',
    },
  },
});

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop/:category" element={<Shop />} />
          <Route path="/Shop/:category/:productId" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </StyledApp>
    </ThemeProvider>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
