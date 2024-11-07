const companyCreateTable = require( "./companyCreateTable" );
const userCreateTable = require( "./userCreateTable" );

const runMigrations = () => {
  console.log( "Executando as migrações do banco de dados..." );

  companyCreateTable();
  userCreateTable();
};

runMigrations();
