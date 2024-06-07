require('dotenv').config();

module.exports = {
  secret: process.env.JWT_SECRET_KEY, // Secret key for JWT signing and encryption
  options: {
    expiresIn: process.env.JWT_EXPIRATION_TIME, // Token only valid for 1 hour
  },
};
