'use strict';

var mongoose = require('mongoose');

module.exports.connect = function connect () {
    mongoose.connect('mongodb://admin:123@userscluster-shard-00-00-tmfmm.mongodb.net:27017,userscluster-shard-00-01-tmfmm.mongodb.net:27017,userscluster-shard-00-02-tmfmm.mongodb.net:27017/users?ssl=true&replicaSet=UsersCluster-shard-0&authSource=admin');

    var db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));

    db.once('open', function() {
      console.log('Connected to DB! \nWaiting...');
    });
  }
