const { table } = require('../db-config');

exports.up = function(knex) {
    return knex.schema
    .createTable("users", tbl => {
      tbl.increments();
      tbl.string('email').unique().notNullable();
      tbl.string('username').notNullable();
      tbl.string('fullName').notNullable();
      tbl.string('password').notNullable();
    })
    .createTable('category', tbl => {
        tbl.increments();
        tbl.string('category').unique().notNullable();
    })
    .createTable('posts', tbl => {
        tbl.increments();
        tbl.string('title').notNullable();
        tbl.string('category_id').unsigned().notNullable().references('id').inTable('category').onUpdate('CASCADE').onDelete('CASCADE');
        tbl.datetime('date');
        tbl.text('content').notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('posts')
    .dropTableIfExists('category')
    .dropTableIfExists('users')
};
