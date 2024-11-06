const db = require( "../database/config/db" );

// Model para gerenciar operações de banco de dados dos usuários
const userModel = {
  
  getAllUsers: () => { // Obter todos os usuários
    return new Promise(( resolve, reject ) => {
      const query = "SELECT * FROM users";
      db.query( query, ( err, results ) => {
        if ( err ) return reject( err );
        resolve( results );
      });
    });
  },

  getUserById: ( id ) => { // Obter um usuário específico por ID
    return new Promise(( resolve, reject ) => {
      const query = "SELECT * FROM users WHERE id = ?";
      db.query( query, [ id ], ( err, results ) => {
        if ( err ) return reject( err );
        resolve( results );
      });
    });
  },

  // Obter um usuário específico por e-mail
  getUserByEmail: ( email ) => {
    return new Promise(( resolve, reject ) => {
      const query = "SELECT * FROM users WHERE email = ?";
      db.query( query, [ email ], ( err, results ) => {
        if ( err ) return reject( err );
        resolve( results );
      });
    });
  },

  createUser: ( userData ) => { // Criar um novo usuário
    return new Promise(( resolve, reject ) => {
      const { name, email, phone, password, company_id, image, config } = userData;
      const query = "INSERT INTO users (name, email, phone, password, company_id, image, config) VALUES (?, ?, ?, ?, ?, ?, ?)";
      db.query( query, [ name, email, phone, password, company_id, image, JSON.stringify( config )], ( err, results ) => {
        if ( err ) return reject( err );
        resolve( results );
      });
    });
  },

  updateUser: ( id, userData ) => { // Atualizar um usuário por ID
    return new Promise(( resolve, reject ) => {
      const { name, email, phone, password, company_id, image, config } = userData;
      const query = "UPDATE users SET name = ?, email = ?, phone = ?, password = ?, company_id = ?, image = ?, config = ? WHERE id = ?";
      db.query( query, [ name, email, phone, password, company_id, image, JSON.stringify( config ), id ], ( err, results ) => {
        if ( err ) return reject( err );
        resolve( results );
      });
    });
  },

  deleteUser: ( id ) => { // Excluir um usuário por ID
    return new Promise(( resolve, reject ) => {
      const query = "DELETE FROM users WHERE id = ?";
      db.query( query, [ id ], ( err, results ) => {
        if ( err ) return reject( err );
        resolve( results );
      });
    });
  }

};

module.exports = userModel;
