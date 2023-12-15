const express = require('express');
const { Tour, PhotoTour } = require('../../db/models');

const apiTourRouter = express.Router();

apiTourRouter.route('/').get(async (req, res) => {
  //   const { regionId } = req.query;
  //   console.log(regionId, 'in /');
  try {
    const AllTours = await Tour.findAll({
      // where: { regionId },
      include: [PhotoTour],
    });
    console.log(AllTours);
    return res.json(AllTours);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

apiTourRouter.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const regionId = await Tour.findAll({
      where: { regionId: id },
      include: [PhotoTour],
    });
    console.log(regionId);
    res.json(regionId);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
module.exports = apiTourRouter;
