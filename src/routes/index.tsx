import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './config';
import { Layout } from '../components/layout/Layout'


// Pages
import { HomePage } from '../pages/home/HomePage';
import { ProductDetailsPage } from '../features/product/pages/ProductDetailsPage';
// import { LoginPage } from '@/pages/auth/LoginPage';
// import { ProfilePage } from '@/pages/profile/ProfilePage';
// import { NotFoundPage } from '@/pages/NotFoundPage';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes with Layout */}
      <Route element={<Layout />}>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.PRODUCT_DETAILS} element={<ProductDetailsPage />}/>
      </Route>
    </Routes>
  );
};