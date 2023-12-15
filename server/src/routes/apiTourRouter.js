const express = require('express');
const {Tours} = require('../../db/models') 


const apiTourRouter = express.Router();

apiTourRouter
.route('/')
.get(async (req,res) => {
    try{
        const AllTours = await Tours.findAll()
        return res.json(AllTours)
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
      }
})
module.exports = apiTourRouter