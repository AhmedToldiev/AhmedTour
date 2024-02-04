const { hashSync } = require("bcrypt");
const role = require("../models/role");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Comments",
      [
        {
          text: "Тур четкий, только введите скидки для студентов Эльбруса",
          tourId: 1,
          userId: 4,
        },
        {
          text: "Тур четкий, только введите скидки для студентов Эльбруса",
          tourId: 2,
          userId: 4,
        },
        {
          text: "Тур четкий, только введите скидки для студентов Эльбруса",
          tourId: 1,
          userId: 4,
        },
        {
          text: "Тур четкий, только введите скидки для студентов Эльбруса",
          tourId: 3,
          userId: 4,
        },
        {
          text: "Тур четкий, только введите скидки для студентов Эльбруса",
          tourId: 1,
          userId: 4,
        },
        {
          text: "Тур четкий, только введите скидки для студентов Эльбруса",
          tourId: 4,
          userId: 4,
        },
        {
          text: "Тур четкий, только введите скидки для студентов Эльбруса",
          tourId: 5,
          userId: 4,
        },
        {
          text: "Тур четкий, только введите скидки для студентов Эльбруса",
          tourId: 6,
          userId: 4,
        },
        {
          text: "Тур четкий, только введите скидки для студентов Эльбруса",
          tourId: 7,
          userId: 4,
        },
        {
          text: "Тур четкий, только введите скидки для студентов Эльбруса",
          tourId: 8,
          userId: 4,
        },
        {
          text: "Тур четкий, только введите скидки для студентов Эльбруса",
          tourId: 9,
          userId: 4,
        },
        {
          text: "Тур четкий, только введите скидки для студентов Эльбруса",
          tourId: 10,
          userId: 4,
        },
        {
          text: "Тур четкий, только введите скидки для студентов Эльбруса",
          tourId: 11,
          userId: 4,
        },
        {
          text: "Тур четкий, только введите скидки для студентов Эльбруса",
          tourId: 12,
          userId: 4,
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
