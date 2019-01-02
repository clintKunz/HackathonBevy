
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          name: 'Test',
          email : 'test@gmail.com',
          password : 'test',
          zipCode : '12345',
          rating : "5"
        },
      ]);
    });
};
