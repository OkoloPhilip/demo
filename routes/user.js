const express = require('express')
const router = express.Router()

const {getAllUsers,createUser} = require('../controllers/user')


router.route('/').post(createUser).get(getAllUsers)

module.exports = router