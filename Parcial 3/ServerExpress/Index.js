const express = require('express');
const mysql  = require('mysql2');
const cors = require('cors');
const app = express();
app.use(cors());



const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'dbtest',
  port     : 3306
});

app.get('/', (req, res) => {
  connection.query('SELECT * FROM users', function(err, results, fields){
    res.json(results);
  });
});

app.get('/users', (req, res) => {
    
  console.log(req.query.iduser);
  let sentenciaSQL = "";

  console.log(sentenciaSQL);

  if(typeof(req.query.iduser)=='undefined'){
    sentenciaSQL = 'SELECT * FROM users';
  }
  else{
    sentenciaSQL = 'SELECT * FROM users WHERE iduser = ' + (req.query.iduser);
  }

  console.log(sentenciaSQL);

  connection.query(sentenciaSQL, function(err, results, fields){
    if(results.length==0){
      res.json({status:0, mensaje:'El id no existe', respuesta:{}});
    }
    else{
      //res.json({status:1, mensaje:'Usuario encontrado', respuesta: results[0]});
      res.json({status:1, mensaje:'Usuario encontrado', respuesta: results});
    }
  })
      
});

app.delete('/', (req, res) => {
  

});

app.post('/', (req, res) => {
    res.json({ mensaje: "Servidor respondiendo a post" });
});

app.delete('/', (req, res) => {
    res.json({ mensaje: "Servidor respondiendo a delete" });
});

app.listen(8083, () => {
    console.log("Servidor Express en puerto 8083");
})