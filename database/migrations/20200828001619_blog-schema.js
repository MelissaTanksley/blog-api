const { table } = require('../db-config');

exports.up = function(knex) {
    return knex.schema
    .createTable("users", tbl => {
      tbl.increments();
      tbl.string('email').unique().notNullable();
      tbl.string('username').notNullable();
      tbl.string('fullName').notNullable();
      tbl.string('password').notNullable();
      tbl.string('role').notNullable().defaultTo('General');
    })
    .createTable('category', tbl => {
        tbl.increments();
        tbl.string('category').unique().notNullable();
    })
    .createTable('posts', tbl => {
        tbl.increments();
        tbl.integer('user_id').unsigned().notNullable().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
        tbl.string('title').notNullable();
        tbl.integer('category_id').unsigned().notNullable().references('id').inTable('category').onUpdate('CASCADE').onDelete('CASCADE');
        tbl.datetime('date');
        tbl.text('content').notNullable();
    })
    .createTable('comments', tbl => {
      tbl.increments();
      tbl.integer('user_id').unsigned().notNullable().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
      tbl.integer('posts_id').unsigned().notNullable().references('id').inTable('posts').onUpdate('CASCADE').onDelete('CASCADE');
      tbl.string('comment').notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('posts')
    .dropTableIfExists('comments')
    .dropTableIfExists('category')
    .dropTableIfExists('users')
};
