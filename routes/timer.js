'use strict';

const express = require('express');
var path = require('path');

const router = express.Router();

const routes = (rm) => {

  router.get('/new', (req, res) => {
    const timerId = rm.createTimer();
    res.redirect(`/timer/${timerId}`);
  });

  router.get('/404', (req, res) => {
    res.status(404).send();
  });

  router.get('/:id', (req, res) => {
    const validId = req.params.id.toLowerCase();
    if (rm.timerExists(validId)) {
      res.status(200).send({ timerId: validId });
    } else {
      res.redirect('/timer/404');
    }
  });

  return router;
}

module.exports = routes;