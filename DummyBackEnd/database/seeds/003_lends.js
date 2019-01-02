
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('lends').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('lends').insert([
        {
          userId: '1',
          loanRangeStart : 200,
          loanRangeStop : 1000,
          loanAmt : 1000,
          lengthMonths : 6,
          type : "car",
          arp : 10,
          startPayback : '2019-12-12',
          rating : 5,
        }
      ]);
    });
};