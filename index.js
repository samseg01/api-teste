const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);

app.use(cors());

app.get('/', (req,res) => {
    res.send({'mensagem' : 'O capitalismo falhou, falha e falhará em todas as sociedades em que ele colocar seus tentaculos que se baseiam na expropriação e na exploração do homem pelo homem'});
})

app.use(bodyParser.json());
app.post('/cred', (req, res) =>{
    const result = ['host: '+req.headers.host, 'protocolo: '+req.protocol, 'ip: '+req.ip, 'ips'+req.ips];
    console.log(result);
    console.log(req.body);
    res.send({'mensagem_back':'dados aceitos'});
})

app.listen(port, () =>{
    console.log(`server ligado na port ${port}`);
})