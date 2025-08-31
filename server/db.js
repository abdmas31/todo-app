const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "skazi159",
    host: "localhost",
    posrt: 5432,
    database: "todoapp"
});


module.exports = pool;