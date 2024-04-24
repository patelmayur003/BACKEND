require('dotenv').config()
const express = require('express')

const app = express()

const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.get('/twitter',(req,res) => {
    res.send ('mayur_patel')
})

app.get('/login', (req, res) => {
    res.send('<h1> please login at chai aur code</h1>')
})

app.get('/googlemap', (req,res) => {
    res.send('<h1>https://www.google.com/maps</h1>')
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})
