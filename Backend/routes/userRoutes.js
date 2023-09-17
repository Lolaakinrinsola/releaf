const express= require('express')
const { getAllUsers } = require('../controller/userController')

const router=express.Router()

router.route('/suggestions').get(getAllUsers)

module.exports= router