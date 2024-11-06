const mysql = require( "mysql2" );
require( "dotenv" ).config(); // Carregar variáveis de ambiente

// Configuração da conexão com o banco de dados MySQL
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

// Criação da conexão com o banco de dados
const connection = mysql.createConnection( dbConfig );

// Conectar ao banco de dados
connection.connect( err => {
  if ( err ) {
    console.error( "Erro ao conectar ao banco de dados: ", err.message );
    process.exit( 1 );
  }
  console.log( "Conexão com o banco de dados MySQL realizada com sucesso!" );

  // Importar e executar os arquivos de inicialização das tabelas
  const runMigrations = require( "../migrations/migrate" );
  runMigrations();
});

module.exports = connection;
