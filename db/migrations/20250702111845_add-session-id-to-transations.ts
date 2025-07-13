import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.alterTable('transactions', (table) => { // Alterando a tabela transactions adicionando um campo novo
        table.uuid('session_id').after('id').index() // adicionando este novo campo abaixo do campo 'id', com index
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.alterTable('transactions', (table) => {
        table.dropColumn('session_id') // Desfazendo a criação do novo campo
    })
}
