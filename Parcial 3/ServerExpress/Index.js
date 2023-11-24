const express = require('express');
const mysql  = require('mysql2');
const cors = require('cors');
const app = express();


app.use(cors());
app.get('/users', (req, res) => {
    
    const connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        database : 'dbtest',
        port     : 3306
      });

      connection.query(
        "SELECT * FROM users",
        function(err, results, fields) {

          res.json(results)

          console.log(err);
          console.log(results); // results contains rows returned by server
          console.log(fields); // fields contains extra meta data about results, if available
        }
      );
});



app.post('/clientes2', (req, res) => {
    res.json({ mensaje: "Servidor respondiendo a post" });
});

app.delete('/clientes3', (req, res) => {
    res.json({ mensaje: "Servidor respondiendo a delete" });
});

app.listen(8083, () => {
    console.log("Servidor Express en puerto 8083");
})