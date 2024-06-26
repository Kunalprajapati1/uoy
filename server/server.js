const express = require("express");
const connectDB = require('./config/config');
const dotenv = require('dotenv');
const morgan = require('morgan');

require("colors");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/user',require('./routes/userModal'));
app.use('/api/donor',require('./routes/userModal'));
app.use('/api/volunteer',require('./routes/userModal'));

app.get('/',(req,res) => {
    res.send('<h1>Hello From Node Server Via Nodemon</h1>');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server Running On ${process.env.NODE_ENV} Mode And On Port ${port}`.bgMagenta.white);
});