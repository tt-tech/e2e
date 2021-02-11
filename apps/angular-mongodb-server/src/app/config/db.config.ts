const dotenv = require('dotenv');

export const uri = () => {
  dotenv.config();
  return `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.rsi9w.mongodb.net/test?retryWrites=true&w=majority`;
};
