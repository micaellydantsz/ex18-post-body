const express = require('express');
const app = express();

// Ativa o middleware para o Express entender JSON no corpo das requisições
app.use(express.json());

// Rota POST /echo que devolve o mesmo JSON recebido
app.post('/echo', (req, res) => {
    const body = req.body;
    
    // O método res.json() já envia o status 200 e configura o Content-Type para application/json
    res.json(body);
});

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
