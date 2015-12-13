/*

Current does not work for me. Deadlocks occurred with more than 8 iterations with mysql driver.
And mariadb driver did not at all.

*/
var session = require('express-session')
var KnexStore = require('connect-session-knex')(session)
var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'travis',
        password: '',
        database: 'travis_ci_test'
    }
})

var Promise = require('bluebird');
var count = 10000
var i = 0;
var tasks = []

knex.schema.dropTableIfExists('sessions').then(function() {
    'use strict';

    var store = new KnexStore({
        knex: knex
    });

    console.time('bench' + count);


    for (; i < count; i++) {
        tasks.push(store.set('testsession' + i, {
            cookie: {
                maxAge: 2000,
                expires: new Date()
            },
            name: 'sample name'
        }))
    }

    Promise.all(tasks, {
        concurrency: 1
    }).then(function() {
        console.timeEnd('bench' + count);
        process.exit(0);
    });
});
