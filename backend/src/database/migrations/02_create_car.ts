import knex from 'knex';

export async function up(knex: knex ){
 return knex.schema.createTable('car', table =>{
    table.increments('id').primary();
    table.string('place').notNullable();
    table.string('year').notNullable();
    table.string('color').notNullable();
    table.integer('daily_cost').notNullable();

    table.integer('id_model')
        .notNullable()
        .references('id')
        .inTable('model')
        .onUpdate('CASCADE');
 });
}

export async function down(knex: knex ){
 return knex.schema.dropTable('car')
}