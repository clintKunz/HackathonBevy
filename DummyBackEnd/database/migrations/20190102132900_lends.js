exports.up = function(knex, Promise) {
    return knex.schema.createTable('lends',lends => {
        lends.increments(); // doing this for the id for simplistic reasons
        lends.float('loanRangeStart').notNullable();
        lends.float('loanRangeStop').notNullable();
        lends.integer('loanAmt').notNullable();
        lends.integer('lengthMonths').notNullable();
        lends.string('type',64);
        lends.integer('arp').notNullable();
        lends.date('startPayback').notNullable();
        lends.integer('rating').notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('lends');
};