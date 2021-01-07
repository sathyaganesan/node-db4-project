exports.seed = async function (knex) {
    await knex("ingredients").insert([
        {name: "All Purpose Flour"},
        {name: "Baking Soda"},
        {name: "Baking Powdwer"},
        {name: "Brown Sugar"},
        {name: "Salt"},
        {name: "Vanilla Extract"},
        {name: "Egg"},
        {name: "Butter"},
        {name: "Milk"},
        {name: "Semi Sweetened Choco Chips"}
    ])
}