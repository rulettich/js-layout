// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// Підключіть файли роутів
const test = require('./test')
const calc = require('./calc')
const community = require('./community')
// Підключіть інші файли роутів, якщо є

// Об'єднайте файли роутів за потреби
router.use('/', test)
router.use('/calc', calc)
router.use('/community', community)
// Використовуйте інші файли роутів, якщо є

// Експортуємо глобальний роутер
module.exports = router
