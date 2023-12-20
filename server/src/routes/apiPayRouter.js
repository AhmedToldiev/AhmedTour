const express = require("express");
const { User } = require("../../db/models");
const verifyAccessToken = require("../middlewares/verifyAccessToken");

const apiPayRouter = express.Router();

apiPayRouter.post("/", verifyAccessToken, async (req, res) => {
  const userId = res.locals.user.id;
  const user = await User.findByPk(userId);
  await user.save();
});

module.exports = apiPayRouter;
