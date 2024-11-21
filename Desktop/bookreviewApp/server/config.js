export const config = {
  mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/bookstore',
  jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
  port: process.env.PORT || 6000
};