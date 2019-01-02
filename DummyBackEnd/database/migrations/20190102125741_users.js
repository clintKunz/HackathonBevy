exports.up = function(knex, Promise) {
    return knex.schema.createTable('users',users => {
        users.increments();
        users.string('name',64).notNullable();
        users.string('email',128).notNullable()
        users.string('password',128).notNullable();
        users.string('zipCode').notNullable();
        users.timestamp('createdAt');
        users.integer('rating')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};