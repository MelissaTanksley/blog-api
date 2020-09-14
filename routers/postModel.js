const db = require("../database/db-config.js");

module.exports = {
    findAll,
    findBy,
    findById,
    add,
    update,
    remove
};

function findAll() {
    return db("posts");
}

function findBy(filter) {
    return db("posts").where(filter).first();
}

function findById(id) {
    return db("posts").where({id: id}).first();
}

function add(user) {
    return db("posts").insert(user, "id").then(ids => findById(ids[0]));
}

function update(changes, id) {
    return db("posts").where({ id: id }).update(changes).then(() => findById(id));
}

function remove(id) {
    return db("posts").where({id: id}).delete();
}

