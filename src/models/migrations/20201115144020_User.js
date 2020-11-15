/* eslint-disable prettier/prettier */

exports.up = (knex) => knex.schema.createTable("users", (table) => {
  table.increments("user_id").primary();
  table.string("user_name").notNullable();
  table.string("user_cpf").notNullable();
}) ;

exports.down = (knex) => knex.schema.dropTable("user");
