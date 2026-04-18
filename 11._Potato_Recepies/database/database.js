import db from './connection.js'

// process.argv.find((argument) => argument === '--delete')

const deleteMode = process.argv.includes('--delete')

if(deleteMode) {
    await db.exec(`DROP TABLE IF EXISTS ingredients;`)
    await db.exec(`DROP TABLE IF EXISTS recipes;`)
}

/*How to run
.exec() //Run DCL/DDL (With no parameters)
.run() //Run queries with no return value (INSERT, UPDATE, DELETE)
.all() // Run a query and retrieve the result set ( SELECT)
*/

/*
Conventions for SQL
- Use snake_case for table and column names.
- Plural for tables
- Use lowercase for table and column names.
*/

//DDL
await db.exec(`
CREATE TABLE IF NOT EXISTS recipes(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100) NOT NULL,
    description CARCHAR(200) ,
    minutes_to_cook INTEGER 
);

CREATE TABLE IF NOT EXISTS ingredients(
    ingredient_id INTEGER PRIMARY KEY AUTOINCREMENT,
    recipe_id INTEGER,
    name VARCHAR(100) NOT NULL,
    quantity INTEGER NOT NULL,
    unit TEXT CHECK(unit IN ("l", "dl", "kg", "ounces")),
    FOREIGN KEY (recipe_id) REFERENCES recipes(id)
);
`
)

// DML

// Seeding
await db.run(`INSERT INTO recipes (name) VALUES ('Potato pancakes');`)

await db.run(`INSERT INTO recipes VALUES ('2', 'Baked Potato', 'Also known as a jacket potato', '50')`)

await db.run(`INSERT INTO ingredients (recipe_id, name, quantity, unit) VALUES (1, 'flour', '0.06', 'kg')`)