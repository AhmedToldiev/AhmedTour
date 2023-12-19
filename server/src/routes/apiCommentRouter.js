const express = require('express');
const { Comment, User } = require('../../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');

const router = express.Router();

router
  .route('/:id')
  .get(async (req, res) => {
    // console.log('------------------');
    const notes = await Comment.findAll({
      include: User,
      where: { tourId: req.params.id },
    });
    res.json(notes);
  })
  // исправить
  .delete(async (req, res) => {
    console.log(req.params, 'sbhdtnuebthv');
    const { id } = req.params;
    try {
      await Comment.destroy({ where: { id } });
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  })
  .post(async (req, res) => {
    const newPost = await Comment.create({
      userId: res.locals?.user?.id,
      body: req.body.body,
      tourId: req.params.id,
    });
    const sendedComment = await Comment.findOne({
      include: User,
      where: { id: newPost.id },
    });
    res.json(sendedComment);
  });
module.exports = router;
