export const ROUTES = {
  HOME: '/',
  PRODUCT_DETAILS: '/products/:id',
  ABOUT: '/about',
} as const;

// Helper to generate dynamique URL s
export const generatePath = {
  productDetails: (id: number) => `/products/${id}`,
};