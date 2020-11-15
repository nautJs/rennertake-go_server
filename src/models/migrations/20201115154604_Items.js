/* eslint-disable prettier/prettier */

exports.up = (knex) => knex.schema.createTable("items", (table) => {
  table.increments("item_id").primary();
  table.float('item_value').notNullable();
  table.enu('item_size', ['PP','P','M','G','GG']);
}) ;

exports.down = (knex) => knex.schema.dropTable("items");
