const express = require('express')
const router = express.Router()

router.route('/:user_id')
    .get()
    .put()
    .delete()

router.post('/', () => {})

router.post('/create', () => {})
