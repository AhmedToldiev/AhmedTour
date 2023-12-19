const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const tokensRouter = require('./routes/tokensRouter');
const authRouter = require('./routes/authRouter');
const apiRegionRouter = require('./routes/apiRegionRouter');
const apiTourRouter = require('./routes/apiTourRouter');
const apiBasketRouter = require('./routes/apiBasketRouter');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.static('public'));
app.use(express.json());

app.use('/api/regions', apiRegionRouter);
app.use('/tokens', tokensRouter);
app.use('/auth', authRouter);
app.use('/api/region/tours', apiTourRouter)
app.use('/api/comments', apiCommentRouter);

app.use('/api/region/tours', apiTourRouter);
app.use('/api/tours/basket', apiBasketRouter);

app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
