const knex = require("../../db/migrations/config/knex")

// working here
const saveproductServicedata = async (serdetail) => {
    try{
        const insertData = {

            //product_id:serdetail.id,
             Nic_code:serdetail.niccode,
             Main_Activity:serdetail.mainactivity,
            Activity_group:serdetail.Activity_group,
            Business_code:serdetail.Business_code,
            Turn_Over:serdetail.TurnOver,
            subscription_id:serdetail.subscriptionId


        }
        return await knex('product_service').insert(insertData)
    }
    catch(err){
        throw Promise.reject(err)
    }
}

const getProductDetailsById = async (productId, subscriptionId) => {
    try{

        if(subscriptionId)
            return await knex('product_service').select('*').where({ subscription_id: subscriptionId})
        
        return await knex('product_service').select('*').where({ product_id: productId})
    }
    catch(err){
        throw Promise.reject(err)
    }
}

const updateProductDetailsService = async (productDetails, productId) => {
    try{
        const insertData = {
            Nic_code:productDetails.niccode,
            Main_Activity:productDetails.mainactivity,
           Activity_group:productDetails.Activity_group,
           Business_code:productDetails.Business_code,
           Turn_Over:productDetails.TurnOver,
           subscription_id:productDetails.subscriptionId
        }
        return await knex('product_service').update(insertData).where({ product_id: productId})
    }
    catch(err){
        throw Promise.reject(err)
    }
}
module.exports = {
    saveproductServicedata,
    getProductDetailsById,
    updateProductDetailsService
}