const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  api_enpoint: process.env.REACT_APP_API_ENDPOINT,
};
