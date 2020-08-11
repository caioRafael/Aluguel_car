import knex from 'knex';

export async function up(knex: knex ){
 return knex.schema.createTable('rent', table =>{
    table.increments('id').primary();
    table.integer('initial_date').notNullable();
    table.integer('final_date').notNullable();
    table.integer('vlaue');

    table.integer('client_id')
        .notNullable()
        .references('id')
        .inTable('client');

    table.integer('car_id')
        .notNullable()
        .references('id')
        .inTable('car');


 });
}

export async function down(knex: knex ){
 return knex.schema.dropTable('model');
}