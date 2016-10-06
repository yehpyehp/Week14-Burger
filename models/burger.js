var orm = require('../config/orm.js');

var burger = {
    selectAll: function (cb) {
        orm.selectAll('burgers', function (res) {
            cb(res);
        });
    },
    // cols and vals are arrays
    create: function (burger, cb) {
        orm.insertOne('burgers', burger, function (res) {
            cb(res);
        });
    },
    update: function (burger, devoured, cb) {
        orm.updateOne('burgers', burger, devoured, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;