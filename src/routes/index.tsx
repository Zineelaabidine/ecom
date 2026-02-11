import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './config';
import { Layout } from '../components/layout/Layout'


// Pages
import { HomePage } from '../pages/home/HomePage';
import { ProductDetailsPage } from '../features/product/pages/ProductDetailsPage';
import { ProductsByCategory } from '../features/product/pages/ProductsByCategory';
import { NotFoundPage } from '../pages/not-found/NotFoundPage';
import { Search } from '../features/product/pages/Search';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes with Layout */}
      <Route element={<Layout />}>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.PRODUCT_DETAILS} element={<ProductDetailsPage />} />
        <Route path={ROUTES.PRODUCTS_BY_CATEGORY} element={<ProductsByCategory />} />
        <Route path={ROUTES.SEARCH} element={<Search />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};