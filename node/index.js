const express = require('express')

const app = express()

app.get('/',(req,res) => {
    res.json({
        message:"You are visiting root"
    })
})
app.get('/login',(req,res) => {
    res.json({
        message:"You are visiting login route"
    })
})
app.get('/logout',(req,res) => {
    res.json({
        message:"You are visiting logout route"
    })
})

app.listen(9000,() => {
    console.log("app listening at port: 9000");
})