const Record = require('../record')
const recordList = require('../seeds/record.json').results
const db = require('../../config/mongoose')

db.once('open', () => {
  console.log('mongodb connected!')
  recordList.forEach(record => Record.create(record))
  console.log('done')
})




