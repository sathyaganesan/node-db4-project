exports.seed = async function (knex) {
    await knex("recipe").insert([
        { name: "Cake"},        
        { name: "Cookies"},        
        { name: "Muffins"}        
    ])
}