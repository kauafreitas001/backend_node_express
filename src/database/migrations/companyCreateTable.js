const connection = require( "../config/db" );

const companyCreateTable = () => { // Função para criar a tabela company e inserir registro padrão
  const companyCreateTableQuery = `
    CREATE TABLE IF NOT EXISTS company (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      registration_number VARCHAR(100) NOT NULL UNIQUE,
      email VARCHAR(255),
      phone VARCHAR(50),
      address VARCHAR(255),
      logo VARCHAR(255),
      config JSON,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );
  `;

  connection.query( companyCreateTableQuery, ( err, results ) => {
    if ( err ) {
      console.error( "Erro ao criar a tabela company: ", err.message );
      process.exit( 1 );
    }
    console.log( "Tabela company verificada/criada com sucesso!" );

    // Verificar se existe algum registro na tabela company
    const checkCompanyQuery = `SELECT COUNT(*) AS count FROM company`;
    connection.query( checkCompanyQuery, ( err, results ) => {
      if ( err ) {
        console.error( "Erro ao verificar registros na tabela company: ", err.message );
        process.exit( 1 );
      }

      const companyCount = results[ 0 ].count;
      if ( companyCount === 0 ) {
        // Inserir um registro padrão se não houver nenhuma empresa
        const insertDefaultCompanyQuery = `
          INSERT INTO company (name, registration_number, email, phone, address, logo, config)
          VALUES ('Company Admin', '11.111.111/0001-00', 'admin@example.com', '(99) 99999-9999', null, null, '{}');
        `;
        connection.query( insertDefaultCompanyQuery, ( err, results ) => {
          if ( err ) {
            console.error( "Erro ao inserir empresa padrão: ", err.message );
            process.exit( 1 );
          }
          console.log( "Empresa padrão inserida com sucesso!" );
        });
      } else {
        console.log( "Empresas já existem na tabela." );
      }
    });
  });
};

module.exports = companyCreateTable;
