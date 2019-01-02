exports.up = function(knex, Promise) {
    return knex.schema.createTable('borrows',borrows => {
        borrows.increments(); // doing this for the id for simplistic reasons
        borrows.string('userId',64).references('id').inTable('users');
        borrows.integer('loanAmt').notNullable();
        borrows.integer('lengthMonths').notNullable();
        borrows.string('type',64);
        borrows.integer('arp').notNullable();
        borrows.date('startPayback').notNullable();
        borrows.string('pitch',1024).notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('borrows');
};