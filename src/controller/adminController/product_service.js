const { saveproductServicedata} = require('../../services/adminServices/productService')

const saveproductdata = async (req, res) => {
    try{
        await saveproductServicedata(req.body);
        return res.status(201).send({messege: `added product succesfully`}).end()
    }
    catch(err){
        return res.status(500).send('Internal Server Error').end()
    }
}
module.exports = {
    saveproductdata
}