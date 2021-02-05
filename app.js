//載入所需套件及模組
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

// 引用路由器
const routes = require('./routes')
require('./config/mongoose')

// 用 app.use 規定每一筆請求都需要透過 body-parser 進行前置處理
app.use(bodyParser.urlencoded({ extended: true }))

//設定handlebars引擎
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs', helpers: { eq: (a, b) => a === b } }))
app.set('view engine', 'hbs')

//使用public靜態資料
app.use(express.static('public'))

// 將 request 導入路由器
app.use(routes)

//監聽app
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})

