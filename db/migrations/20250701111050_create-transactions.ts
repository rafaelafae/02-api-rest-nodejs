import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('transactions', (table) => { //Criação de tabela com 2 campos
        table.uuid('id').primary()
        table.text('title').notNullable()
        table.decimal('amount', 10, 2).notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
        // Se for SQL é NOW(), se for SQLite CURRENT_TIMESTAP
        // Usando o knex o código fica a prova de banco de dados, portando usando um método do knex 
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('transactions') // Desfazendo a criação da tabela
}

