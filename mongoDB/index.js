const mongoose = require('mongoose')
const express = require('express')

const db = "mongodb://mymongo:27017/"

// Connect to MongoDB database.
mongoose.connect(db)
.then(() => {
    console.log("Connected to the Database")
})
.catch((err) => {
    console.log(`Error connecting to the database: ${err}`)
})

const app = express()

app.get('/',(req,res) => {
    res.json({
        message: "You are visiting Root route"
    })
})

app.listen(8000,() => {
    console.log("Server is running on port 8000")
})
