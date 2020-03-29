exports.up = function (knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        table.string('ngo_id').notNullable();
        table.date('date').defaultTo(Date.now());

        //Foreign-key
        table
            .foreign('ngo_id')
            .references('id')
            .inTable('ngos');
    });
};

exports.down = knex => knex.schema.dropTable('incidents');
