require('dotenv').config();
const express = require('express');
const app = express();
const service = require('./service');
const logger = console;
service(app);

const server = app.listen(process.env.PORT || 3000, () => {
  logger.info('Webhook Client online');
});
module.exports = server;
