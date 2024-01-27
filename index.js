const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;

app.get('/', (req,res) => {
    res.send('O capitalismo falhou, falha e falhará em todas as sociedades em que ele colocar seus tentaculos que se baseiam na expropriação e na exploração do homem pelo homem');
})

app.listen(port, () =>{
    console.log(`server ligado na port ${port}`);
})