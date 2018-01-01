'use strict';

export default class Config {
    getConfig() {
        return {
            mongoCluster: 'mongodb://admin:123@userscluster-shard-00-00-tmfmm.mongodb.net:27017,userscluster-shard-00-01-tmfmm.mongodb.net:27017,userscluster-shard-00-02-tmfmm.mongodb.net:27017/users?ssl=true&replicaSet=UsersCluster-shard-0&authSource=admin'
        }
    }
}