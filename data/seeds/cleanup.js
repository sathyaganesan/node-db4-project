exports.seed = async function (knex) {
    await knex("recipe_ingredients").truncate()
    await knex("ingredients").truncate()
    await knex("recipe").truncate()
}