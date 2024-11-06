const companyModel = require( "../models/companyModel" );

// Serviço para gerenciar a lógica de negócios relacionada as empresas
const companyService = {
  
  getAllCompanies: async () => { // Obter todas as empresas
    try {
      const results = await companyModel.getAllCompanies();
      return results;
    } catch ( err ) {
      console.error( "Erro ao obter empresas:", err );
      throw new Error( "Erro ao obter empresas" );
    }
  },

  getCompanyById: async ( id ) => { // Obter uma empresa específico por ID
    try {
      const results = await companyModel.getCompanyById( id );
      return results;
    } catch ( err ) {
      console.error( `Erro ao obter a empresa com ID ${ id }:`, err );
      throw new Error( "Erro ao obter empresa" );
    }
  },

  createCompany: async ( userData ) => { // Criar uma nova empresa
    try {
      const results = await companyModel.createCompany( userData );
      return results;
    } catch ( err ) {
      console.error( "Erro ao criar empresa:", err );
      throw new Error( "Erro ao criar empresa" );
    }
  },

  updateCompany: async ( id, userData ) => { // Atualizar uma empresa por ID
    try {
      const results = await companyModel.updateCompany( id, userData );
      return results;
    } catch ( err ) {
      console.error( `Erro ao atualizar a empresa com ID ${ id }:`, err );
      throw new Error( "Erro ao atualizar empresa" );
    }
  },
  
  deleteCompany: async ( id ) => { // Excluir uma empresa por ID
    try {
      const results = await companyModel.deleteCompany( id );
      return results;
    } catch ( err ) {
      console.error( `Erro ao excluir a empresa com ID ${ id }:`, err );
      throw new Error( "Erro ao excluir empresa" );
    }
  }
  
};

module.exports = companyService;
