const { where } = require("../data/config");
const db = require("../data/config");

function getRecipes() {
    return db("recipe");
}

function getRecipeById(id) {
    return db("recipe")
        .where("recipe.id", id)
}

function getInstructions(recipe_id) {
    return db("recipe")
        .where("recipe.id", recipe_id)
    .select("recipe.id", "recipe.name as Recipe_Name", "recipe.instruction as Instruction")
}


module.exports = {
    getRecipes,
    getRecipeById,
    getInstructions,    
}