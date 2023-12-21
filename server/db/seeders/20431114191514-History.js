const { hashSync } = require('bcrypt');
const role = require('../models/role');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Histories',
      [
        {
          tourId: 1,
          userId: 3
        },
        {
          tourId: 2,
          userId: 4
        },
        {
          tourId: 3,
          userId: 2
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
