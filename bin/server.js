'use strict';

const express = require('express');
const app = express();
const http = require('http').Server(app);
const RoomManager = require('../models/RoomManager');

const cors = require("cors");



const server = (port) => {

  const rm = new RoomManager();

  // Routes
  const timer = require('../routes/timer')(rm);
  
  app.use('/timer', timer);
  app.use(cors());
  app.use(express.static('public'));

  // Socket
  const socket = require('../middleware/socket')(http, rm);

  http.listen(port, () => console.log(`🕒  Sync Timer listening on port ${port}`));
  return http;
};

module.exports = server;