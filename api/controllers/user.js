'use strict';

var db = require('../helpers/db.js');
var User = require('../models/user.js');
var util = require('util');

module.exports = {
  addUser: addUser,
  getUsers: getUsers
};

db.connect();

function addUser(req, res) {
    var newUser = new User(req.swagger.params.name.value);

    newUser.save(function (err, newUser) {
        if (err) return console.error(err);
        res.json("User created successfully");
    });
}

function getUsers(req, res) {
    User.find(function (err, users) {
        if (err) return console.error(err);
        res.json(users);
    });
}
