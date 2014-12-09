express-session-benchmarks
==========================
10,000 Inserts:

[connect-redis](https://www.npmjs.org/package/connect-redis): 329ms

[session-file-store](https://www.npmjs.org/package/session-file-store): 1220ms

[connect-session-knex w/postgres 9.4](https://www.npmjs.org/package/connect-session-knex): 4094ms

[connect-cassandra-cql](https://www.npmjs.org/package/connect-cassandra-cql): 4741ms

[connect-sqlite3](https://www.npmjs.org/package/connect-sqlite3): 8207ms

[connect-session-knex 1.0.5 w/sqlite3](https://www.npmjs.org/package/connect-session-knex): 10049ms 

[connect-nedb-session](https://www.npmjs.org/package/connect-nedb-session): : 32434ms

[connect-nedb-session-two](https://www.npmjs.org/package/connect-nedb-session-two): 72670ms



