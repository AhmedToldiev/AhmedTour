const express = require('express');
const { Basket} = require('../../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');

const apiBasketRouter = express.Router();

apiBasketRouter.route('/').post(verifyAccessToken, async (req, res) => {
  const { tourId } = req.body;

  try {
    const newBasket = await Basket.create({
      tourId,
      userId: res.locals.user.id,
    });
    res.json(newBasket);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
apiBasketRouter.route('/basket').get(async (req, res) => {
  try {
    const AllTours = await Basket.findAll({
      include: 'Tour',
    });
    console.log(AllTours, 'asdfghjkl');
    return res.json(AllTours);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = apiBasketRouter;
