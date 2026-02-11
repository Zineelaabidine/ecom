export const ROUTES = {
  HOME: '/',
  PRODUCT_DETAILS: '/products/:id',
  PRODUCTS_BY_CATEGORY: '/products/category/:category',
  NOT_FOUND: '*',
  SEARCH: '/products/search',
} as const;

// Helper to generate dynamique URL s
export const generatePath = {
  productDetails: (id: number) => `/products/${id}`,
  productsByCategory: (category: string) => `/products/category/${encodeURIComponent(category)}`,
  search: (query: string) => `/products/search?q=${encodeURIComponent(query)}`,
};