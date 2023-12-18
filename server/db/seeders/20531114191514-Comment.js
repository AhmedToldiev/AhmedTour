/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Comments',
      [
        {
          text: 'Хороший тур',
          tourId: 1,
          userId: 1,
        },
        {
          text: 'Четко зашел шашлык в горах',
          tourId: 2,
          userId: 2,
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
