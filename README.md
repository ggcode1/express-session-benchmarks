express-session-benchmarks
==========================
10,000 Inserts:

[connect-redis](https://www.npmjs.org/package/connect-redis):
```
Node v0.10.33: 329ms
io.js master (2014-12-07): 319ms
```
[session-file-store](https://www.npmjs.org/package/session-file-store):
```
Node v0.10.33: 1220ms
io.js master (2014-12-07): 1074ms
```
[connect-session-knex w/postgres 9.4](https://www.npmjs.org/package/connect-session-knex): 
```
Node v0.10.33: 4094ms
io.js master (2014-12-07): 3759ms
```
[connect-cassandra-cql](https://www.npmjs.org/package/connect-cassandra-cql): 4741ms
```
Node v0.10.33:  4741ms
io.js master (2014-12-07): 4647ms
```
[connect-sqlite3](https://www.npmjs.org/package/connect-sqlite3):
```
Node v0.10.33: 8207ms
```

[connect-session-knex w/sqlite3](https://www.npmjs.org/package/connect-session-knex): 
```
Node v0.10.33: 16678ms
```
[connect-nedb-session](https://www.npmjs.org/package/connect-nedb-session):
```
Node v0.10.33: 32434ms
io.js master (2014-12-07): 997ms (this is likely a bug)
```
[connect-nedb-session-two](https://www.npmjs.org/package/connect-nedb-session-two): 
```
Node v0.10.33: 72670ms
io.js master (2014-12-07): 67727ms
```
