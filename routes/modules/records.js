// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 Restaurant model
const Record = require('../../models/record')

//設定new路由
router.get('/new', (req, res) => {
  return res.render('new')
})

//設定new post路由
router.post('/', (req, res) => {
  const { name, Category, date, amount } = req.body
  let [category, categoryIcon] = Category.split('/')
  return Record.create({ name, category, categoryIcon, date, amount })
    .then(() => res.redirect('/')) // 新增完成後導回首頁
    .catch(error => console.log(error))

})

module.exports = router

