import dotenv from 'dotenv';
dotenv.config();

const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;
const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD;

const STRIPE_SECRET_KEY = "sk_test_51THTwWK8kgtlHxktVzwFGRGdfTxh8EzKsm02rwuVmlEJIg8gQDDlvDDnHqo2OAU6GqlAYGhAQofGrC2r0ONrGGno00JZApk3w2";
const STRIPE_KEY = process.env.STRIPE_KEY;

export default {
  JWT_USER_PASSWORD,
  JWT_ADMIN_PASSWORD,

  STRIPE_SECRET_KEY,

  STRIPE_KEY: STRIPE_KEY
};