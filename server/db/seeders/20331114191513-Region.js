const { hashSync } = require('bcrypt');
const role = require('../models/role');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Regions',
      [
        {
          name: 'Дагестан',
          description: '456',
          img: ''
        },
        {
          name: 'Дагестан',
          description: '456',
          img: ' '
        },
        {
          name: '',
          description: '456',
          img: ''
        },
        {
          name: 'Дагестан',
          description: '456',
          img:''
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
