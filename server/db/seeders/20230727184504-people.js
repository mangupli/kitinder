'use strict';

const { Person } = require('../models');
const studentsArr = require('../studentsArr');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Person.bulkCreate(studentsArr);
  },

  async down(queryInterface, Sequelize) {
    await Person.destroy();
  },
};
