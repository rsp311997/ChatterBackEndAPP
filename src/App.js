const express = require('express');
const Routers = require('./Routers/index.js');
const RequestLogger = require('./Utilities/Middleware/RequestLogger.js');
const ErrorLogger = require('./Utilities/Middleware/ErrorLogger.js');
const App = express();

App.use(RequestLogger);
App.use(Routers);
App.use(ErrorLogger);

module.exports = App;
