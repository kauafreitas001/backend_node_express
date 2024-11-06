const db = require( "../database/config/db" );

// Model para gerenciar operações de banco de dados das empresas
const companyModel = {
  
  getAllCompanies: () => { // Obter todas as empresas
    return new Promise(( resolve, reject ) => {
      const query = "SELECT * FROM company";
      db.query( query, ( err, results ) => {
        if ( err ) return reject( err );
        resolve( results );
      });
    });
  },

  getCompanyById: ( id ) => { // Obter uma empresa específica por ID
    return new Promise(( resolve, reject ) => {
      const query = "SELECT * FROM company WHERE id = ?";
      db.query( query, [ id ], ( err, results ) => {
        if ( err ) return reject( err );
        resolve( results );
      });
    });
  },

  createCompany: ( userData ) => { // Criar uma nova empresa
    return new Promise(( resolve, reject ) => {
      const { name, registration_number, email, phone, address, logo, config } = userData;
      const query = "INSERT INTO company (name, registration_number, email, phone, address, logo, config) VALUES (?, ?, ?, ?, ?, ?, ?)";
      db.query( query, [ name, registration_number, email, phone, address, logo, JSON.stringify( config )], ( err, results ) => {
        if ( err ) return reject( err );
        resolve( results );
      });
    });
  },

  updateCompany: ( id, userData ) => { // Atualizar uma empresa por ID
    return new Promise(( resolve, reject ) => {
      const { name, registration_number, email, phone, address, logo, config } = userData;
      const query = "UPDATE company SET name = ?, registration_number = ?, email = ?, phone = ?, address = ?, logo = ?, config = ? WHERE id = ?";
      db.query( query, [ name, registration_number, email, phone, address, logo, JSON.stringify( config ), id ], ( err, results ) => {
        if ( err ) return reject( err );
        resolve( results );
      });
    });
  },

  deleteCompany: ( id ) => { // Excluir uma empresa por ID
    return new Promise(( resolve, reject ) => {
      const query = "DELETE FROM company WHERE id = ?";
      db.query( query, [ id ], ( err, results ) => {
        if ( err ) return reject( err );
        resolve( results );
      });
    });
  }

};

module.exports = companyModel;
