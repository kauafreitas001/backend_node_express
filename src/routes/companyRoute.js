const express = require( "express" );
const companyMiddleware = require( "../middlewares/companyMiddleware" );
const companyController = require( "../controllers/companyController" );

// Inicializando o roteador
const router = express.Router();

// Definir as rotas relacionadas as empresas
router.get( "/", companyController.getAllCompanies ); // Rota para obter todas as empresas
router.get( "/:id", companyController.getCompanyById ); // Rota para obter uma empresa específico por ID
router.post( "/", companyMiddleware.validateCompanyData, companyController.createCompany ); // Rota para criar uma nova empresa
router.put( "/:id", companyMiddleware.validateCompanyData, companyController.updateCompany ); // Rota para atualizar uma empresa por ID
router.delete( "/:id", companyController.deleteCompany ); // Rota para excluir uma empresa por ID

module.exports = router;
