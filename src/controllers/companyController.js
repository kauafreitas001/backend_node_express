const companyService = require( "../services/companyService" );

const companyController = {
  
  getAllCompanies: async ( req, res ) => {
    try {
      const results = await companyService.getAllCompanies();
      res.status( 200 ).json( results );
    } catch ( err ) {
      console.error( "Erro ao buscar empresa: ", err );
      res.status( 500 ).json({ error: "Erro ao buscar empresa" });
    }
  },

  getCompanyById: async ( req, res ) => {
    const companyId = req.params.id;
    try {
      const results = await companyService.getCompanyById( companyId );
      if ( results.length === 0 ) {
        return res.status( 404 ).json({ error: "Empresa não encontrada" });
      }
      res.status( 200 ).json( results[ 0 ]);
    } catch ( err ) {
      console.error( "Erro ao buscar empresa: ", err );
      res.status( 500 ).json({ error: "Erro ao buscar empresa" });
    }
  },

  createCompany: async ( req, res ) => {
    const { name, registration_number, email, phone, address, logo, config } = req.body;
    try {
      const results = await companyService.createCompany({ name, registration_number, email, phone, address, logo, config });
      res.status( 201 ).json({ message: "Empresa criada com sucesso", companyId: results.insertId });
    } catch ( err ) {
      console.error( "Erro ao criar empresa: ", err );
      res.status( 500 ).json({ error: "Erro ao criar empresa" });
    }
  },

  updateCompany: async ( req, res ) => {
    const companyId = req.params.id;
    const { name, registration_number, email, phone, address, logo, config } = req.body;
    try {
      const results = await companyService.updateCompany( companyId, { name, registration_number, email, phone, address, logo, config });
      if ( results.affectedRows === 0 ) {
        return res.status( 404 ).json({ error: "Empresa não encontrada" });
      }
      res.status( 200 ).json({ message: "Empresa atualizada com sucesso" });
    } catch ( err ) {
      console.error( "Erro ao atualizar empresa: ", err );
      res.status( 500 ).json({ error: "Erro ao atualizar empresa" });
    }
  },

  deleteCompany: async ( req, res ) => {
    const companyId = req.params.id;
    try {
      const results = await companyService.deleteCompany( companyId );
      if ( results.affectedRows === 0 ) {
        return res.status( 404 ).json({ error: "Empresa não encontrada" });
      }
      res.status( 200 ).json({ message: "Empresa excluída com sucesso" });
    } catch ( err ) {
      console.error( "Erro ao excluir empresa: ", err );
      res.status( 500 ).json({ error: "Erro ao excluir empresa" });
    }
  }
  
};

module.exports = companyController;
