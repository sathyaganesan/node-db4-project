exports.seed = async function (knex) {
    await knex("recipe_ingredients").turncate();
    await knex("ingredients").turncate();
    await knex("recipe").turncate();
}