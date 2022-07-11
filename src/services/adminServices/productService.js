const knex = require("../../db/migrations/config/knex")

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
module.exports = {
    saveproductServicedata
}