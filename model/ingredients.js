const db = require("../data/config");

function find() {
    return db("recipe");
}

function findById(id) {
    return db("recipe")
        .where("id", id)
        .first()
}

module.exports = {
    find,
    findById,
}