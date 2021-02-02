const express = require('express')
const mongoose = require('mongoose')
const db = mongoose.connection
const app = express()
const PORT = 3000

mongoose.connect('mongodb://localhost/expense-list', { useNewUrlParser: true, useUnifiedTopology: true })

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})


app.get('/', (req, res) => {
  res.send('hi')
})

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})