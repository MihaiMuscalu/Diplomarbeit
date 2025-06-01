// src/config.js
const config = {
  username: process.env.REACT_APP_USERNAME,
  password: process.env.REACT_APP_PASSWORD,
};

console.log("Environment:", process.env.REACT_APP_USERNAME);

export default config;
