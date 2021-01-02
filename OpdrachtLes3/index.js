const http = require('http');
const makePage = http.createServer((req , res) => {
    if(req.url == '/'){
        res.writeHead(200 );
        res.write('<html><body><p>Home Page</p></body></html>');
        res.end();
    }
    else if(req.url == '/profile'){
       res.writeHead(200);
       res.write('<html><body><p>Profile Page</p></body></html>');
        res.end();
    }
    else if(req.url == '/data'){
        const obj = {
            voornaam: "Khava",
            achternaam: "Djabrailova",
            leeftijd: 26,
            woonplaats: "Gent"
        }
        const text = JSON.stringify(obj);
        res.writeHead(200);
        res.write('<html><body><p>'+text+' </p></body></html>');
        res.end();
    }
    else{
        res.end('Invalid Request!');
    }
     const log = require('./file');
});
makePage.listen(5000);
console.log('Node.js started');