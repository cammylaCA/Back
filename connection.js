var pgp = require('pg-promise')(/* options */);
var db = pgp('postgres://postgres:Xy7vS3*g@35.188.207.89:5432/sherlock');

/**
 * Function para la conección con la BD
 *
 * @returns
 */
function connectDatabase() {

    db.one('SELECT $1 AS value', 123)
        .then((data) => {
            console.log('Database pg is connected!');
        })
        .catch((error) => {
            console.log('Error connecting pg database!', error);
        });

    return db;
}

module.exports = connectDatabase();