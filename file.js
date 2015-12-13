var Promise = require('bluebird');
var session = require('express-session');
var Store = require('session-file-store')(session);
var util = require('util');

var count = 10000;
var i = 0;
var tasks = [];

console.time('bench' + count)

var store = Promise.promisifyAll(new Store({

}));

for (; i < count; i++) {
    tasks.push(store.setAsync('testsession' + i, {
        cookie: {
            maxAge: 2000
        },
        name: 'sample name'
    }));
}

Promise.all(tasks).then(function() {
    console.log(util.inspect(process.memoryUsage()));
    console.timeEnd('bench' + count);
    process.exit(0);
})
