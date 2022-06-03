import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AuthPage from './pages/AuthPage';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
