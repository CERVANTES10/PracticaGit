const http = require ('http');


const servidor = http.createServer((req,res)=>{
    //res.setHeader("Access-control-allow-origin", "*")   //CORS
    res.write("Servidor http de node contestando a una peticion web")
    res.end();
});

servidor.listen(8082,()=>{
    console.log("Servidor Node http corriendo en puerto 8082");
});