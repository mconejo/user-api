'use strict';

import DB from '../helpers/db.js';
import User from '../models/user.js';

const db = new DB();

db.connect();
module.exports = {
  addUser: addUser,
  getUsers: getUsers,
  getUserById: getUserById,
  updateUser: updateUser,
  deleteUser: deleteUser
};

function addUser(req, res) {
    let newUser = new User(req.swagger.params.user.value.newUser);

    newUser.save(function (err, newUser) {
        if (err) return console.error(err);
        res.json(newUser);
    });
}

function getUsers(req, res) {
    User.find(function (err, users) {
        if (err) return console.error(err);
        res.json(users);
    });
}

function getUserById(req, res) {
    let id = req.swagger.params._id.value;

    User.findOne({'_id': id},function (err, user) {
        if (err) return console.error(err);
        res.json(user);
    });
}

function updateUser(req, res) {
    let id = req.swagger.params._id.value,
        user = req.swagger.params.user.value;

    User.update({'_id': id}, user, function(err){
        if (err) return console.error(err);
        res.json('User updated successfully. ID: ' + id);
    });
}

function deleteUser(req, res) {
    let id = req.swagger.params._id.value;

    User.findByIdAndRemove({'_id': id}, function(err) {
        if (err) return console.error(err);
        res.json('User removed.');
    });
}
