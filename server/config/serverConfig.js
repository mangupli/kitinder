require('dotenv').config();
const express = require('express');
const path = require('path');
const morgan = require('morgan');


const config = (app) => {
  app.use(express.static(path.join(__dirname, '../public')));
  app.use(morgan('dev'));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
};

module.exports = config;
