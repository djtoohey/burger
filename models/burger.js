var orm = require("../config/orm");

var burger = {
    selectAll: function (cb) {
        orm.selectAll(function (data) {
            cb(data);
        });
    },

    insertOne: function (burgerName, ifDevoured, cb) {
        orm.insertOne(burgerName, ifDevoured, function (data) {
            cb(data);
        });
    },

    updateOne: function (burgerID, cb) {
        orm.updateOne(burgerID, function (data) {
            cb(data);
        });
    }
};

module.exports = burger;