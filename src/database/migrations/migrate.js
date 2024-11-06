// Importação dos arquivos de criação de tabelas
const companyCreateTable = require( "./companyCreateTable" );
const userCreateTable = require( "./userCreateTable" );

const runMigrations = () => {
  console.log( "Executando as migrações do banco de dados..." );
    
  // Executar as funções de criação de tabelas
  companyCreateTable();
  userCreateTable();
};

module.exports = runMigrations;
