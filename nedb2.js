var Promise = require('bluebird');
var session = require('express-session');
var NedbStore = require('connect-nedb-session-two')(session);

var count = 10000;
var i = 0;
var tasks = [];

console.time('bench'+count)

var store = Promise.promisifyAll(new NedbStore(
{ filename: 'sessions2.nedb', clearInterval: 24 * 3600 * 1000 }
));

for (; i < count; i++) {
	tasks.push(store.setAsync('testsession'+i, {cookie: {maxAge:2000}, name: 'sample name'}));
}

Promise.all(tasks).then(function() {
	console.timeEnd('bench'+count);
	process.exit(0);
})
