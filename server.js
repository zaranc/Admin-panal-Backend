const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
let connectDB = require('./db/connectDB');
const router = require('./routes');
const cookieParser = require('cookie-parser');
let port = process.env.PORT || 3000;
app.use(cookieParser())
app.use(cors({ config: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


connectDB();
app.use('/v1', router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
