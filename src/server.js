const app = require( "./app" );
const PORT = process.env.PORT;

// Iniciar o servidor e escutar na porta definida
app.listen( PORT, ( err ) => {
  if ( err ) {
    console.log( "Erro ao iniciar servidor" );
    return;
  }
  console.log( `Servidor rodando na porta ${ PORT }`);
});
