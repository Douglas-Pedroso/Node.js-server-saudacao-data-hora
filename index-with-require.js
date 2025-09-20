const http = require('http');
const requestListener = function (req, res){
    res.writeHead(200);
    
    const dateVal = new Date();
    const hour = dateVal.getHours();
    let greeting;
    if (hour >= 6 && hour < 12) {
        greeting = "Bom dia!";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Boa tarde!";
    } else if (hour >= 18 && hour < 21) {
        greeting = "Boa noite!";
    } else if (hour >= 21 || hour < 6) {
        greeting = "Ainda é madrugada!";
    }
    res.end(`Olá, ${greeting} Hora atual: ${dateVal.toLocaleTimeString('pt-PT')}`);;
};
const port = 8080;
const server = http.createServer(requestListener);
server.listen(port);
console.log('Servidor a escutar na porta: ' + port);