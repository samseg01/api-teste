const express = require('express');
const http = require('http');
const cors = require('cors');

const port = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);

app.use(cors());

app.get('/', (req,res) => {
    res.send({'mensagem' : 'O capitalismo falhou, falha e falhará em todas as sociedades em que ele colocar seus tentaculos que se baseiam na expropriação e na exploração do homem pelo homem'});
})

app.listen(port, () =>{
    console.log(`server ligado na port ${port}`);
})