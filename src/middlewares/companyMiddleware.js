// Middleware para validação dos dados das empresas
const companyMiddleware = {
  validateCompanyData: ( req, res, next ) => {
    const { name, registration_number } = req.body;
    if ( !name || !registration_number ) {
      return res.status( 400 ).json({ error: "Nome e numero de registro são obrigatórios" });
    }
    
    next(); // Prosseguir para o próximo middleware ou controlador
  },
};

module.exports = companyMiddleware;
