const express = require("express");
const { History, Tour, User } = require("../../db/models");
// const verifyAccessToken = require("../middlewares/verifyAccessToken");

const apiHistoryRouter = express.Router();

apiHistoryRouter.route("/").get(async (req, res) => {
  try {
    const allToursWuthUser = await History.findAll({
      include: [
        {
          model: Tour,
        },
        {
          model: User,
        },
      ],
      // where: { tourId: req.params.id },
    });
    console.log(allToursWuthUser, "----");
    res.json(allToursWuthUser);
  } catch (error) {
    console.log(error);
  }
});

apiHistoryRouter.post(async (req, res) => {
   try {
     const history = await History.create({
      include: Tour,
         
     });
     const postWithAuthor = await History.findByPk(history.id, {
       include: User,
     });
     res.status(201).json(postWithAuthor);
   } catch (error) {
     console.log(error);
     res.status(500).json(error);
   }
 });

module.exports = apiHistoryRouter;
