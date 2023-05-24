'use strict';

// require('dotenv').config();
const server = require('./bin/server');
const port = process.env.PORT || 80;

server(port);