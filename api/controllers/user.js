'use strict';

import DB from '../helpers/db.js';
import User from '../models/user.js';

const db = new DB();

db.connect();
module.exports = {
  addUser: addUser,
  getUsers: getUsers
};

function addUser(req, res) {
    let newUser = new User(req.swagger.params.name.value);

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

function getUserById(req, res) {
    let id = req.swagger.params.name.value;

    User.findOne({'_id': id},function (err, users) {
        if (err) return console.error(err);
        res.json(users);
    });
}
