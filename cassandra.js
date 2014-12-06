'use strict';
var Promise = require('bluebird')
Promise.longStackTraces();


var session = require('express-session')
var cassandra = require('cassandra-driver');
var CassandraCqlStore = require('connect-cassandra-cql')(session);

var client = new cassandra.Client({contactPoints: ['localhost'], keyspace: 'sessions', poolSize: 100 });

var count = 10000;
var i = 0;
var tasks = [];

console.time('bench'+count);

var store = Promise.promisifyAll(new CassandraCqlStore({client: client}));

for (; i < count; i++) {
  tasks.push(store.setAsync('testsession'+i, {cookie: {maxAge:2000}, name: 'sample name'}));
}

Promise.all(tasks).then(function() {
  console.timeEnd('bench'+count);
  process.exit(0);
});
