
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('borrows').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('borrows').insert([
        {
          userId: '1',
          loanAmt : 1000,
          lengthMonths : 6,
          type : "car",
          arp : 10,
          startPayback : '2019-12-12',
          pitch : "I am broke I need a car"
        }
      ]);
    });
};
