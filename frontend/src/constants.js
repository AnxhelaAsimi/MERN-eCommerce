// export const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : '';
export const BASE_URL = 'https://mern-e-commerce-server-one.vercel.app/';
export const PRODUCTS_URL = `https://mern-e-commerce-server-one.vercel.app/api/products/`;
export const USERS_URL = `https://mern-e-commerce-server-one.vercel.app/api/users/`;
export const ORDERS_URL = 'https://mern-e-commerce-server-one.vercel.app/api/orders';
export const PAYPAL_CLIENT_ID = process.env.NODE_ENV === 'development' ? 'sb' : 'production';
export const PAYPAL_URL = '/api/config/paypal';
