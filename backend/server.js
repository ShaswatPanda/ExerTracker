// Creating an API

// Importing and config
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors);
app.use(express.json());

// DB config
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true },
    (error, client) => {
        if(error){
          console.log(error);
          return console.log("Unable to connect to the db.");
        }});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log(`MongoDB database connection established successfully`);
});

// Listen
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})