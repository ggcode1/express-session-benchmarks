express-session-benchmarks
==========================
10,000 Inserts:

[connect-redis](https://www.npmjs.org/package/connect-redis):
```
Node v0.10.33: 329ms
io.js master (2014-12-07): 319ms
Node v0.12: 411ms
io.js 1.2.1: 466ms
```
[session-file-store](https://www.npmjs.org/package/session-file-store):
```
Node v0.10.33: 1220ms
io.js master (2014-12-07): 1074ms
Node v0.12: 931ms
io.js 1.2.1: 1073ms
```
[connect-session-knex with Mariadb 10.0.15](https://www.npmjs.org/package/connect-session-knex):
```
Node v0.10.33: 3775ms
io.js master (2014-12-14): 3661ms
Node v0.12: 2470ms
io.js 1.2.1: 2227ms
```
[connect-session-knex with PostgreSQL 9.4](https://www.npmjs.org/package/connect-session-knex):
```
Node v0.10.33: 4210ms
io.js master (2014-12-14): 3844ms
Node v0.12: 2432ms
io.js 1.2.1: 2282ms

```
[connect-cassandra-cql](https://www.npmjs.org/package/connect-cassandra-cql):
```
Node v0.10.33:  4741ms
io.js master (2014-12-07): 4647ms
Node v0.12: 4954ms
io.js 1.2.1: 4340ms
```
[connect-sqlite3](https://www.npmjs.org/package/connect-sqlite3):
```
Node v0.10.33: 8207ms
iojs v1.2.0: 8421ms
```

[connect-session-knex 1.0.8 with Sqlite3](https://www.npmjs.org/package/connect-session-knex):
```
Node v0.10.33: 11204ms
iojs v1.2.0: 9182ms
```
[connect-nedb-session](https://www.npmjs.org/package/connect-nedb-session):
```
Node v0.10.33: 78691ms
io.js master (2014-12-14): 73505ms
```
[connect-nedb-session-two](https://www.npmjs.org/package/connect-nedb-session-two):
```
Node v0.10.33: 72670ms
io.js master (2014-12-07): 74159ms
```
