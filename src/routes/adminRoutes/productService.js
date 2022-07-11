
const {saveproductdata } = require('../../controller/adminController/product_service')

const express = require('express')
const router = express.Router()

router.post('', saveproductdata)



module.exports = router