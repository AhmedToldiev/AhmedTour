const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const tokensRouter = require('./routes/tokensRouter');
const authRouter = require('./routes/authRouter');
const apiRegionRouter = require('./routes/apiRegionRouter')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
    credentials: true,
    origin: true
}));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.static('public'));
app.use(express.json());

app.use('/', apiRegionRouter )
app.use('/tokens', tokensRouter);
app.use('/auth', authRouter);

app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
