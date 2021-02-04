const Record = require('../record')
const recordList = require('./record.json')
const db = require('../../config/mongoose')

db.once('open', () => {
  console.log('mongodb connected!')
  recordList.results.forEach(record => Record.create(record))
  console.log('done')
})




