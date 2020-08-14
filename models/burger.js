var orm = require("../config/orm");

var burger = {
    selectAll: function (cb) {
        orm.selectAll(function (data) {
            cb(data);
        });
    },

    insertOne: function (cb) {
        orm.insertOne(burgerName, ifDevoured, function (data) {
            cb(data);
        });
    },

    updateOne: function (cb) {
        orm.updateOne(burgerName, ifDevoured, function (data) {
            cb(data);
        });
    }
};

module.exports = burger;