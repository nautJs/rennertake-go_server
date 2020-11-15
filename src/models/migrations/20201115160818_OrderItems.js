/* eslint-disable prettier/prettier */

exports.up = (knex) => knex.schema.createTable("order_items", (table) => {
  table.increments("order_items_id").primary();
  table.integer("orders_items_amount").notNullable();
  table.integer("item_id").unique().unsigned().notNullable();
  table.foreign("item_id").references('items.item_id');
  table.integer("order_id").unique().unsigned().notNullable();
  table.foreign("order_id").references('orders.order_id');
}) ;

exports.down = (knex) => knex.schema.dropTable("order_items");
