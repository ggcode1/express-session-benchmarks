var pg = require('pg');
var session = require('express-session')
var pgSession = require('connect-pg-simple')(session)
var connectionString = 'postgres://session:session@localhost/session';

var Promise = require('bluebird')
var fs = require('fs')
var count = 10000
var i=0
var tasks = []

store = Promise.promisifyAll(new pgSession({
	pg: pg,
	tableName: 'sessions',
	conString: connectionString
}));

console.log(store)

store.setAsync('testsession'+i, {cookie: {maxAge:2000, expires: new Date() }})
.then(function(a) {
	console.log(a);
});

	/*console.time('bench'+count)

	for (; i < count; i++) {
		tasks.push(store.setAsync('testsession'+i
		, {cookie: {maxAge:2000, expires: new Date() }
		, name: 'sample name'}))
	}

	Promise.all(tasks, {concurrency: 1}).then(function() {
		console.timeEnd('bench'+count);
		process.exit();
		})*/
