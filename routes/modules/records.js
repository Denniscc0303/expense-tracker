// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 Record model
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
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

//設定edit路由
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  Record.findById(id)
    .lean()
    .then((record) => res.render('edit', { record }))
    .catch(error => console.error(error))
})

//設定edit post路由
router.put('/:id', (req, res) => {
  const id = req.params.id
  const { name, Category, date, amount } = req.body
  let [category, categoryIcon] = Category.split('/')
  const newCategory = { 'category': category, 'categoryIcon': categoryIcon }
  const newReqBody = Object.assign(req.body, newCategory)
  Record.findById(id)
    .then(record => {
      record = Object.assign(record, newReqBody)
      return record.save()
    })
    .then(() => res.redirect('/')) // 新增完成後導回首頁
    .catch(error => console.log(error))

})

//設定delete路由
router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

//設定filter路由
router.get('/filter', (req, res) => {
  const filter = req.query.filter
  if (filter === 'all') res.redirect('/')
  Record.find({ category: filter })
    .lean()
    .then(records => {
      let totalAmount = 0
      records.forEach(item => {
        totalAmount += item.amount
      })
      res.render('index', { totalAmount, records, filter })
    })
    .catch(error => console.log(error))
})

module.exports = router

