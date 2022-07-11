
const {saveproductdata, getProductdata, updateProductdata} = require('../../controller/adminController/product_service')

const express = require('express')
const router = express.Router()

router.post('', saveproductdata)
router.get('', getProductdata)
router.put('', updateProductdata)



module.exports = router