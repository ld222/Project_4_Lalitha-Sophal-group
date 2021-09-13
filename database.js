// Loading and initializing the library:
const pgp = require('pg-promise')();


// connection to postgres
const con = 'postgres://postgres:postgressql@localhost:5432/incode_project_04';

// Creating a new database instance
const db = pgp(con);

// Exporting the database object
module.exports = db;
