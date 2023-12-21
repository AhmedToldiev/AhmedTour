const express = require("express");
const { History,Tour,User } = require("../../db/models");
// const verifyAccessToken = require("../middlewares/verifyAccessToken");

const apiHistoryRouter = express.Router();

apiHistoryRouter.route("/").get( async (req, res) => {
 try {
    const allToursWuthUser = await History.findAll({
        include:[{
 model: Tour,
        },{
 model: User,
        }] 
        // where: { tourId: req.params.id },
    
    })
    console.log(allToursWuthUser,'----');
    res.json(allToursWuthUser)  
 } catch (error) {
    console.log(error)
 }
  
});


module.exports = apiHistoryRouter;
