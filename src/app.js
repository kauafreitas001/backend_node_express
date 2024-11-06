// Importação dos módulos necessários
const express = require( "express" );
const cors = require( "cors" );
const routes = require( "./routes/routes" );

// Inicializando o app com Express
const app = express();

// Middlewares
app.use( cors() ); // Permitir conexões de qualquer origem com CORS

app.use( express.json() ); // Interpretar JSON

app.use( routes ); // Importar todas as rotas da aplicação

// Exportar o app para ser utilizado no server.js
module.exports = app;
