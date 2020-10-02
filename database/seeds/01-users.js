
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email: "melissa@melissa-longenberger.com", username: "beedev", fullName: "Melissa Longenberger", password: "$2a$10$cMtqYbWJKLSF1r1j2K3nA.Zv1O.epohHna/7zpkchH3FBPdGRBCQC", role: "Admin"},
        {email: "melissalongenberger24@gmail.com", username: "general", fullName: "Melissa Longenberger", password: "$2a$10$TQnlU09G320AAiVIBXJnVuiTgnHoE9eDzr58dSSDxIZJn2u4P3jeu", role: "General"}
      ]);
    });
};
