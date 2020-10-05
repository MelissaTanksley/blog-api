
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {title: 'Test post', category_id: '4', content: 'This is the test post', user_id: '1'}
      ]);
    });
};
