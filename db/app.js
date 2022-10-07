const express = require("express");
const app = express();
const pg = require("pg");
const {Client} = pg;
const PORT = 3001;
const client = new Client({
    connectionString: "postgresql://postgres:docker@localhost:5432/vehicles"
})

client.connect();

//Create CRUD

app.get('/api/vehicles/', (req, res) => {
    
})
















app.listen(PORT, (req, res) => {
    console.log("Postgres server listening on ", PORT);
})

