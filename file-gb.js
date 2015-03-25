var Promise = require("bluebird")
var session = require('express-session')
var Store = require('session-file-store')(session)

var count = 10000
var i = 0
var tasks = []

var store = Promise.promisifyAll(new Store())

console.time('bench'+count)

Promise.coroutine(function* () {
    var promises = []
	for (var i=0; i< count; i++) {
		promises.push(store.setAsync('testsession'+i, {cookie: {maxAge:2000}, name: 'sample name'}))
	}
	yield Promise.all(promises)
	console.timeEnd('bench'+count)
	process.exit(0)
})();
