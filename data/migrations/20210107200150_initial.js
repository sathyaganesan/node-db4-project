
exports.up = async function(knex) {
    await knex.schema.createTable("recipe", (table) => {
        table.increments("id")
        table.text("name").notNull().unique()
        table.text("Instruction").notNull()
    })
    
    await knex.schema.createTable("ingredients", (table) => {
        table.increments("id")
        table.text("name").notNull().unique()
    })
    
    await knex.schema.createTable("recipe_ingredients", (table) => {
        table.integer("recipe_id").notNull().references("id").inTable("recipe")
        table.integer("ingredients_id").notNull().references("id").inTable("ingredients")
        table.primary(["recipe_id", "ingredients_id"])
        table.text("Quantity").notNull
    })
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("recipe_ingredients");
    await knex.schema.dropTableIfExists("ingredients");
    await knex.schema.dropTableIfExists("recipe");
};
