exports.seed = async function (knex) {
    await knex("recipe_ingredients").insert([
        { recipe_id: 1, ingredients_id: 1, Quantity: "2 Cups"},
        { recipe_id: 1, ingredients_id: 2, Quantity: "1 Tbsp"},
        { recipe_id: 1, ingredients_id: 3, Quantity: "1/2 Tbsp"},
        { recipe_id: 1, ingredients_id: 4, Quantity: "2 Cups"},
        { recipe_id: 1, ingredients_id: 5, Quantity: "1/2 Tbsp"},
        { recipe_id: 1, ingredients_id: 6, Quantity: "1 Tbsp"},
        { recipe_id: 1, ingredients_id: 7, Quantity: "2 Nos"},
        { recipe_id: 1, ingredients_id: 8, Quantity: "1 Stick"},
        { recipe_id: 1, ingredients_id: 9, Quantity: "1 Cup"},
        { recipe_id: 1, ingredients_id: 10, Quantity: "3/4 Cup"},
        { recipe_id: 2, ingredients_id: 1, Quantity: "4 Cups"},
        { recipe_id: 2, ingredients_id: 2, Quantity: "2 Tbsp"},
        { recipe_id: 2, ingredients_id: 3, Quantity: "1 Tbsp" },
        { recipe_id: 2, ingredients_id: 4, Quantity: "3 Cups"},
        { recipe_id: 2, ingredients_id: 5, Quantity: "1 Tbsp"},
        { recipe_id: 2, ingredients_id: 6, Quantity: "2 Tbsp"},
        { recipe_id: 2, ingredients_id: 7, Quantity: "4 Nos"},
        { recipe_id: 2, ingredients_id: 8, Quantity: "2 Stick"},
    ])
}