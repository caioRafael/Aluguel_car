import knex from 'knex';

export async function up(knex: knex ){
 return knex.schema.createTable('client', table =>{
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.string('whatsapp').notNullable();
    table.string('cnh').notNullable();
 });
}

export async function down(knex: knex ){
 return knex.schema.dropTable('client');
}