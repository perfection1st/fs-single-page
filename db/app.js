const express = require("express");
const app = express();
const pg = require("pg");
const cors = require("cors")
const {Client} = pg;
const PORT = 3001;
const client = new Client({
    connectionString: "postgresql://postgres:docker@localhost:5432/vehicles"
})

client.connect();
app.use(express.json());
//need cors to run API
app.use(cors());
//Create CRUD

app.route('/api/cars/')
.get((req, res) => {
    client.query('SELECT * FROM cars')
    .then (result => {
        res.send(result.rows);
    })
    .catch(err => {
        console.log(err);
    })
})
.post((req, res) => {
    client.query(`INSERT INTO cars (make, year, color) VALUES ('$1','$2','$3')`, [req.body.make, req.body.year, req.body.color])
    .then(result => {
        res.status(201).send('Car added.')
    })
    .catch(err => {
        console.error(err);
    }) 
});

app.route('/api/owners/')
.get((req, res) => {
    client.query('SELECT * FROM owners')
    .then (result => {
        res.send(result.rows);
    })
    .catch(err => {
        console.log(err);
    })
})
.post((req, res) => {
    client.query(`INSERT INTO owners (first_name, last_name, cars_id) VALUES ('$1','$2','$3')`, [req.body.first_name, req.body.last_name, req.body.cars_id])
    .then(result => {
        res.status(201).send('Owner added.')
    })
    .catch(err => {
        console.error(err);
    }) 
});





app.listen(PORT, (req, res) => {
    console.log("Postgres server listening on ", PORT);
})

