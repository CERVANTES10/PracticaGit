const express = require('express');

const app = express();

app.get('/clientes', (req,res)=>{
    res.json({mensaje: "Servidor respondiendo a get"});
});

app.post('/clientes', (req,res)=>{
    res.json({mensaje: "Servidor respondiendo a post"});
});

app.delete('/clientes', (req,res)=>{
    res.json({mensaje: "Servidor respondiendo a delete"});
});

app.listen(8082,()=>{
    console.log("Servidor Express en puerto 8082");
})