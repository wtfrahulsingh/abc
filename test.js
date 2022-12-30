const express = require('express')
const path = require('path')
const app = express()


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/hello.html'))
})
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname+'/home.html'))
  })

app.listen(3000)
console.log("App is Running on 3000")