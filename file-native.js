var promisify = require('thenify-all');

var session = require('express-session');
var Store = require('session-file-store')(session);

var count = 10000;
var i = 0;
var tasks = [];

var store = new Store();
store.set = promisify(store.set);

console.time('bench'+count)

for (; i < count; i++) {
  tasks.push(store.set('testsession'+i, {cookie: {maxAge:2000}, name: 'sample name'}));
}

Promise.all(tasks).then(function() {
  console.timeEnd('bench'+count);
  process.exit(0);
})

