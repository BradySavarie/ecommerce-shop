import { HashRouter, Routes, Route } from 'react-router-dom';
import MainNavBar from './components/MainNavBar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import StyledApp from './components/styles/App.styled';

export function App() {
  return (
    <StyledApp>
      <MainNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop/:category" element={<Shop />} />
        <Route path="/Shop/:category/:productId" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </StyledApp>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
