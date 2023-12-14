/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "PhotoTours",
      [
        {
          img1: "https://kartinki.pics/pics/uploads/posts/2022-08/1661273791_27-kartinkin-net-p-gori-dagestana-oboi-krasivo-31.jpg",
          img2: "https://kartinki.pics/pics/uploads/posts/2022-08/1661273790_1-kartinkin-net-p-gori-dagestana-oboi-krasivo-1.jpg",
          img3: "https://kartinki.pics/pics/uploads/posts/2022-08/1661273812_7-kartinkin-net-p-gori-dagestana-oboi-krasivo-8.jpg",
          img4: "https://kartinki.pics/pics/uploads/posts/2022-08/1661273878_28-kartinkin-net-p-gori-dagestana-oboi-krasivo-32.jpg",
        },
        {
          img1: "https://priroda.club/uploads/posts/2021-12/thumbs/1638957387_16-priroda-club-p-gori-dagestana-priroda-krasivo-foto-17.jpg",
          img2: "https://ic.pics.livejournal.com/mg5642/66429722/2709295/2709295_original.jpg",
          img3: "https://gamsutl.com/ru/wp-content/uploads/sites/2/2021/05/bg.jpg",
          img4: "https://img.geliophoto.com/sarykum/00_sarykum.jpg",
        },
        {
          img1: "https://rg.ru/uploads/images/156/16/93/magas_d_850r.jpg",
          img2: "https://extraguide.ru/images/t/37a36940f8b7ed74424853f6e5bcdfe45c209513.jpg",
          img3: "https://extraguide.ru/images/t/c79db1c751d0d8246188e8f894a7ef968699f1ca.jpg",
          img4: "https://extraguide.ru/images/t/afae76ec18123daf0cfe70c29c488f60d9051a76.jpeg",
        },
        {
          img1: "https://static.aviasales.com/p-static/ru/uploads/2023/08/gory-bashni.jpg",
          img2: "https://upload.wikimedia.org/wikipedia/commons/2/22/%D0%A1%D1%80%D0%B5%D0%B4%D0%BD%D0%B5%D0%B2%D0%B5%D0%BA%D0%BE%D0%B2%D1%8B%D0%B9_%D0%B1%D0%B0%D1%88%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D0%BA%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81_%D0%AD%D1%80%D0%B7%D0%B8%2C_%D0%B7%D0%B0%D0%BA%D0%B0%D1%82_%D0%B2_%D0%B4%D0%BE%D0%BB%D0%B8%D0%BD%D0%B5_%D0%90%D1%80%D0%BC%D1%85%D0%B8%2C_%D0%98%D0%BD%D0%B3%D1%83%D1%88%D0%B5%D1%82%D0%B8%D1%8F%2C_%D0%B3%D0%BE%D1%80%D1%8B_%D0%9A%D0%B0%D0%B2%D0%BA%D0%B0%D0%B7%D0%B0.jpg",
          img3: "https://i.pinimg.com/736x/58/b9/91/58b99117511482df3ade2988433bc4f6.jpg",
          img4: "https://priroda.club/uploads/posts/2022-09/thumbs/1662274306_4-priroda-club-p-gornaya-ingushetiya-krasivo-foto-4.jpg",
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
