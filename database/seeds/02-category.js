
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('category').del()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {category: 'Web Development'},
        {category: 'Front End'},
        {category: 'Back End'},
        {category: 'Lambda'}
      ]);
    });
};
