var connection = require("./connection");

var orm = {
    selectAll: function () {
        var queryString = "SELECT burger_name FROM burgers;";

        connection.query(queryString, function (err, data) {
            if (err) throw err;

            console.log(data);
        })
    },

    insertOne: function (burgerName, ifDevoured) {
        var queryString = `INSERT INTO burgers ("burger_name", "devoured") VALUES (${burgerName}, ${ifDevoured});`;

        connection.query(queryString, function (err, data) {
            if (err) throw err;

            console.log(data)
        })
    },

    updateOne: function (burgerName, ifDevoured) {
        var queryString = `UPDATE "burgers" SET "devoured" = ? WHERE ("burger_name" = ?);`;

        connection.query(queryString, [ifDevoured, burgerName], function (err, data) {
            if (err) throw err;

            console.log(data)
        })
    }
}

module.exports = orm;