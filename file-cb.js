var session = require('express-session');
var Store = require('session-file-store')(session);

var count = 10000;
var i = 0;
var done = 10000;

console.time('bench'+count)

var store = new Store();

for (; i < count; i++) {
  store.set('testsession'+i, {cookie: {maxAge:2000}, name: 'sample name'}, function (err, a) {
    if (err) throw err;
    done--;
    if (done === 0) {
      console.timeEnd('bench'+count);

      process.exit(0);
    }
  })
}

