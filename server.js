const express = require('express')
const mangoose = require('mangoose')
const dotenv = require('dotenv').config()
const app = express()



const PORT = process.env.PORT
app.listen(PORT, function() {
    console.log('up and running on port: ' + PORT);
})