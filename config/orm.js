var connection = require("./connection");

var orm = {
    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers;";

        connection.query(queryString, function (err, data) {
            if (err) throw err;
            cb(data);
        });
    },

    insertOne: function (burgerName, ifDevoured, cb) {
        var queryString = `INSERT INTO burgers (burger_name, devoured) VALUES ("${burgerName}", ${ifDevoured});`;

        connection.query(queryString, function (err, data) {
            if (err) throw err;
            cb(data);
        });
    },

    updateOne: function (burgerID, cb) {
        var queryString = `UPDATE burgers SET devoured = 1 WHERE (id = ${burgerID});`;

        connection.query(queryString, function (err, data) {
            if (err) throw err;
            cb(data);
        });
    }
};

module.exports = orm;