const express = require("express");
const { Tour, PhotoTour } = require("../../db/models");

const apiTourRouter = express.Router();

apiTourRouter
  .route("/")
  .get(async (req, res) => {
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
  })
  .post(async (req, res) => {
    try {
      if (!req.body?.title)
        return res.status(500).json({ message: "Empty reqbody" });
      // console.log(req.body);
      // console.log(req.file);
      const { name, body, price, regionId, photoTourId } = req.body;
      const newProduct = await Tour.create({
        regionId,
        name,
        body,
        price,
        photoTourId
      });
      return res.status(201).json(newProduct);
    } catch (error) {
      return res.status(500).json(error);
    }
  });

apiTourRouter.delete("/:id", async (req, res) => {
  await Tour.destroy({ where: { id: req.params.id } });
  res.sendStatus(200);
});

apiTourRouter.route("/:id").get(async (req, res) => {
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
