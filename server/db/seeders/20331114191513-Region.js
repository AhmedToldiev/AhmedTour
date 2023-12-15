const { hashSync } = require("bcrypt");
const role = require("../models/role");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Regions",
      [
        {
          name: "Дагестан",
          description:
            "Необычные туры и камерные экспедиции познакомят тебя с Дагестаном и подарят незабываемые впечатления. Организаторы и гиды — опытные проводники, которые продумали программу до мелочей и составили уникальный маршрут. Ты увидишь Дагестан глазами местных, наполнишься духом путешествий и познакомишься с крутыми людьми.",
          img: "https://bronk.club/uploads/posts/2023-02/1676027262_bronk-club-p-dagestanskie-pozhelaniya-pinterest-34.jpg",
        },

        {
          name: "Ингушетия ",
          description:
            "Путешествия по Кавказу становятся всё популярнее, но Ингушетия порой остаётся без должного внимания. Самая маленькая республика региона кружит голову идиллическими пейзажами и древними легендами. А уникальные башенные комплексы манят исследовать многовековые тайны, сокрытые в каменных стенах. Отправимся открывать «страну башен», где слышны отголоски чеченской, осетинской и грузинской культур.",
          img: "https://img.tourister.ru/files/3/0/0/6/9/4/9/6/clones/870_653_fixedwidth.jpg",
        },
        {
          name: "Кабардино-Балкария",
          description:
            "Кабардино-Балкария расположена в центре Кавказа, здесь есть высокие горы, красивые ущелья, горные озёра и целебные минеральные источники. Красавец Эльбрус и ещё шесть вершин высотой более 5000 метров, увенчанные белоснежными шапками, возвышаются над зелёными равнинами. Разнообразные возможности для активного отдыха привлекают сюда альпинистов, горнолыжников и просто любителей горных троп.",
          img: "https://avatars.mds.yandex.net/get-marketcms/1532570/img-9e00dc74-74d2-4f78-9b71-e751a42fdfa5.jpeg/optimize",
        },
        {
          name: "Чечня",
          description:
            "Чечня — одна из республик на Северном Кавказе, вокруг которой раскинулись живописные хребты Кавказских гор. Туристы сюда едут ради особой культуры, традиций горных народов, различных достопримечательностей и, конечно, природы. Самое большое горное озеро на Северном Кавказе, самый большой некрополь, самобытная кухня, низкие цены и небольшая территория республики — вот далеко не все особенности Чечни.",
          img: "https://mashuk-tour.ru/wp-content/uploads/2020/03/Озеро-Кезеной-Ам-2.jpg",
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
