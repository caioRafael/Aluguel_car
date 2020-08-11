import knex from 'knex';

export async function up(knex: knex ){
 return knex.schema.createTable('model', table =>{
    table.increments('id').primary();
    table.string('name_model').notNullable();
 });
}

export async function down(knex: knex ){
 return knex.schema.dropTable('model');
}