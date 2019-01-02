exports.up = function(knex, Promise) {
    return knex.schema.table('lends', lends => {
        lends.string('userId',64).references('id').inTable('users');
    })
};
exports.down = function(knex, Promise) {
    return knex.schema.table('lends' , function(lends){
        lends.dropColumn('userId');
    });
};
