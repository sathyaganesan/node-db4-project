exports.seed = async function (knex) {
    await knex("recipe").insert([
        { name: "Cake", instruction: "Mix all the ingredient and bake"},        
        { name: "Cookies", instruction: "Mix the above ingredients with milk"},        
        { name: "Muffins", instruction: "Mix all the ingredients and make perfect consistency"}        
    ])
}