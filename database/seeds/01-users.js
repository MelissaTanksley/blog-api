
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email: "melissa@melissa-longenberger.com", username: "beedev", fullName: "Melissa Longenberger", password: "$2a$10$.0wtYKP5ltdqb95cJ.AZ/.GK7EDXEIZv8ZMAaBI6nq8yvElEJOBjy"}
      ]);
    });
};
