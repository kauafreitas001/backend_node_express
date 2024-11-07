const connection = require( "../config/db" );

const userCreateTable = () => {
  const userCreateTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      phone VARCHAR(50),
      password VARCHAR(255) NOT NULL,
      company_id INT NOT NULL,
      image VARCHAR(255),
      config JSON,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      FOREIGN KEY (company_id) REFERENCES company(id)
    );
  `;

  connection.query( userCreateTableQuery, ( err, results ) => {
    if ( err ) {
      console.error( "Erro ao criar a tabela users: ", err.message );
      process.exit( 1 );
    }
    console.log( "Tabela users verificada/criada com sucesso!" );

    const checkUsersQuery = `SELECT COUNT(*) AS count FROM users`;
    connection.query( checkUsersQuery, ( err, results ) => {
      if ( err ) {
        console.error( "Erro ao verificar registros na tabela users: ", err.message );
        process.exit( 1 );
      }

      const userCount = results[ 0 ].count;
      if ( userCount === 0 ) {
        const insertDefaultUserQuery = `
          INSERT INTO users (name, email, phone, password, company_id, image, config)
          VALUES ('Admin', 'admin@example.com', '(99) 99999-9999', 'admin123', 1, null, '{}');
        `;
        connection.query( insertDefaultUserQuery, ( err, results ) => {
          if ( err ) {
            console.error( "Erro ao inserir usuário padrão: ", err.message );
            process.exit( 1 );
          }
          console.log( "Usuário padrão inserido com sucesso!" );
        });
      } else {
        console.log( "Usuários já existem na tabela." );
      }
    });
  });
};

module.exports = userCreateTable;
