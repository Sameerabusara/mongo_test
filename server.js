const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const app = express()
mongoose.connect(process.env.MONGODB_URI, function(err){
    console.log('connected to database');
})

app.use(express.json())

const Schema = mongoose.Schema
const itemSchema = new Schema({
    name: String,
    description: String,
    qty: Number,
    isAvailable: Boolean
})

const Item = mongoose.model('item', itemSchema)

const item = new Item({
    name: 'laptop',
    description: 'macBook',
    qty: 5,
    isAvailable: true
})

app.post('/item', async function(req,res){
    const item = req.body
    const itemDb = new Item(item)

    const dbRes = await itemDb.save()
    res.send(dbRes)
})

app.get('/item', async function(req,res){
    const items = await Item.find({})
    res.send(items)
})
// item.save().then((res) => {
//     console.log(res);
// })

// const items = Item.find({}).then(function(items){
    
//     console.log(items);
// })


const PORT = process.env.PORT
app.listen(PORT, function() {
    console.log('up and running on port: ' + PORT);
})