
exports.up = function(knex) {
    return knex.schema.createTable('product_service', ( table ) => {
        table.bigIncrements('product_id')
        table.string('Nic_code')
        table.string('Main_Activity')
        table.string('Activity_group')
        table.integer('Business_code')
        table.string('Turn_Over')
        table.string('subscription_id')
      })
      
};


exports.down = function(knex) {
    return knex.schema.dropTable('product_service')
};
