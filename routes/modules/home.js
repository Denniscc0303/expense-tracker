// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 Record model
const Record = require('../../models/record')

// 定義首頁路由
router.get('/', (req, res) => {
  Record.find()
    .lean()
    .then(records => {
      let totalAmount = 0
      records.forEach(item => { totalAmount += item.amount })
      res.render('index', { records, totalAmount })
    })
    .catch(error => console.error(error))
})

module.exports = router

