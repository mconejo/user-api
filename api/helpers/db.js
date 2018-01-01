'use strict';

import mongoose from 'mongoose';
import Config from '../../config/config.js';

export default class DB {

    connect () {

        const db = mongoose.connection;
        const conf = new Config;

        mongoose.connect(conf.getConfig().mongoCluster);

        db.on('error', console.error.bind(console, 'connection error:'));

        db.once('open', function() {
            console.log('Connected to DB! \nWaiting...');
        });
    }

}
