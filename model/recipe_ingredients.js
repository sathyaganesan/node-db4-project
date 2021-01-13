const db = require("../data/config");

function getShoppingList(id) {
    return db("recipe_ingredients")
        .where("recipe_id", id)
        .innerJoin("recipe", "recipe_id", "recipe.id")
        .innerJoin("ingredients", "ingredients_id", "ingredients.id")
        .select("recipe_id", "recipe.name as Recipe_name", "ingredients.name as Ingredients_Name")
}

module.exports = {
    getShoppingList,
}