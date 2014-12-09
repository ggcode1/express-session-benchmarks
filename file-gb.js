var Promise = require("bluebird");

var session = require('express-session');
var Store = require('session-file-store')(session);

var count = 10000;
var i = 0;
var tasks = [];

var store = Promise.promisifyAll(new Store());

console.time('bench'+count)

/*

Promise.all(tasks).then(function() {
	console.timeEnd('bench'+count);
	process.exit(0);
})*/


Promise.coroutine(function* () {
	for (var i=0; i< count; i++) {
		yield store.setAsync('testsession'+i, {cookie: {maxAge:2000}, name: 'sample name'});
	}
	console.timeEnd('bench'+count);
	process.exit(0);
})();
