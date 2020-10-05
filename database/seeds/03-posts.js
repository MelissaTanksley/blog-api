
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {title: 'Test post', content: 'This is the test post', users_id: 1, category_id: 1}
      ]);
    });
};
