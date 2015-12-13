var Promise = require('bluebird')
var express = require('express');
var session = require('express-session');
// var RDBStore = require('express-session-rethinkdb')(session);
var RDBStore = require('session-rethinkdb')(session);
var util = require('util');

var store = Promise.promisifyAll(new RDBStore({
    clientOptions: {
        db: 'test',
        host: 'localhost',
        port: '28015'
    },
    table: 'session',
    sessionTimeout: 86400000,
    flushInterval: 60000
}));

var count = 10000
var tasks = []
console.time('bench' + count)

store.on('connect', function() {

    for (var i = 0; i < count; i++) {
        tasks.push(store.setAsync('testsession' + i, {
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
        console.log(util.inspect(process.memoryUsage()));

        console.timeEnd('bench' + count);
        process.exit();
    })

})
