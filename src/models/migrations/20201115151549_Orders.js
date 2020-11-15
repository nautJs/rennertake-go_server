/* eslint-disable prettier/prettier */

exports.up = (knex) => knex.schema.createTable("orders", (table) => {
  table.increments("order_id").primary();
  table.integer("orders_items_amount").notNullable();
  table.integer("user_id").unique().unsigned().notNullable();
  table.foreign("user_id").references('users.user_id');
}) ;

exports.down = (knex) => knex.schema.dropTable("orders");
