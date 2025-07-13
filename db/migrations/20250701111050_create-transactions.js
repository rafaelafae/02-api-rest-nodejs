"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = up;
exports.down = down;
async function up(knex) {
    await knex.schema.createTable('transactions', (table) => {
        table.uuid('id').primary();
        table.text('title').notNullable();
        table.decimal('amount', 10, 2).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
        // Se for SQL é NOW(), se for SQLite CURRENT_TIMESTAP
        // Usando o knex o código fica a prova de banco de dados, portando usando um método do knex 
    });
}
async function down(knex) {
    await knex.schema.dropTable('transactions'); // Desfazendo a criação da tabela
}
