const Category = require('../category')
const categoryList = require('../seeds/category.json').results
const db = require('../../config/mongoose')

db.once('open', () => {
  console.log('mongodb connected!')
  categoryList.forEach(category => Category.create(category)
    .then(() => { return db.close() }))
  console.log('done')
})
