// export const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : '';
export const BASE_URL = 'https://mern-e-commerce-server-one.vercel.app/';
export const PRODUCTS_URL = `/api/products/`;
export const USERS_URL = `/api/users/`;
export const ORDERS_URL = '/api/orders';
export const PAYPAL_CLIENT_ID = process.env.NODE_ENV === 'development' ? 'sb' : 'production';
export const PAYPAL_URL = '/api/config/paypal';
