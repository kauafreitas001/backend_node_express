const mysql = require( "mysql2" );
require( "dotenv" ).config();

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

const connection = mysql.createConnection( dbConfig );

connection.connect( err => {
  if ( err ) {
    console.error( "Erro ao conectar ao banco de dados: ", err.message );
    process.exit( 1 );
  }
  console.log( "Conexão com o banco de dados MySQL realizada com sucesso!" );
});

module.exports = connection;
