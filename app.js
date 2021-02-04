const express = require('express')
const exphbs = require('express-handlebars');
const Record = require('./models/record')
const app = express()
const PORT = 3000
require('./config/mongoose')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

//使用public靜態資料
app.use(express.static('public'))


app.get('/', (req, res) => {
  Record.find()
    .lean()
    .then(records => {
      res.render('index', { records })
    })
    .catch(error => console.error(error))
})

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})

