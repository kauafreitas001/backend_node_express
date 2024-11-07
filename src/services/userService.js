const userModel = require( "../models/userModel" );

// Serviço para gerenciar a lógica de negócios relacionada aos usuários
const userService = {
  
  getAllUsers: async () => {
    try {
      const results = await userModel.getAllUsers();
      return results;
    } catch ( err ) {
      console.error( "Erro ao obter todos os usuários:", err );
      throw new Error( "Erro ao obter todos os usuários" );
    }
  },

  getUserById: async ( id ) => {
    try {
      const results = await userModel.getUserById( id );
      return results;
    } catch ( err ) {
      console.error( `Erro ao obter o usuário com ID ${ id }:`, err );
      throw new Error( "Erro ao obter usuário" );
    }
  },

  createUser: async ( userData ) => {
    try {
      // Verificar se o e-mail já está em uso
      const existingUser = await userModel.getUserByEmail( userData.email );
      if ( existingUser.length > 0 ) {
        throw new Error( "O e-mail já está em uso" );
      }

      // Se o e-mail não estiver em uso, criar o novo usuário
      const results = await userModel.createUser( userData );
      return results;
    } catch ( err ) {
      console.error( "Erro ao criar usuário:", err );
      throw new Error( "Erro ao criar usuário" );
    }
  },

  updateUser: async ( id, userData ) => {
    try {
      const results = await userModel.updateUser( id, userData );
      return results;
    } catch ( err ) {
      console.error( `Erro ao atualizar o usuário com ID ${ id }:`, err );
      throw new Error( "Erro ao atualizar usuário" );
    }
  },
  
  deleteUser: async ( id ) => {
    try {
      const results = await userModel.deleteUser( id );
      return results;
    } catch ( err ) {
      console.error( `Erro ao excluir o usuário com ID ${ id }:`, err );
      throw new Error( "Erro ao excluir usuário" );
    }
  }
  
};

module.exports = userService;
