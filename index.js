//protocolo de intercambio
var http=require('http');
//CREANDO EL SERVIDOR MEDIANTE EL USO DEL PROTOCOLO HTTP
var server=http.createServer();

//SERVICIO WEB
function mensaje(req,resp){
    //ESTADO 200 SATISFACTORIO, MENSAJE DE TIPO TEXTO PLANO CONFIGURADO MEDIANTE JSON
    resp.writeHead(200,{'content-type':'text/plain'});
    //ESCRIBO EL MENSAJE EN TEXTO PLANO
    resp.write('HOLA MUNDO');
    //FINALICE LA COMUNICACIÓN ENTRE EL CLIENTE Y EL SERVIDOR
    resp.end();

}

server.on('request',mensaje);
server.listen(3000,function(){
    console.log("La solicitud fue realizada mediante el puerto 3000");
});