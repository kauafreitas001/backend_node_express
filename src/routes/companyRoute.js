const express = require( "express" );
const companyMiddleware = require( "../middlewares/companyMiddleware" );
const companyController = require( "../controllers/companyController" );

const router = express.Router();

router.get( "/", companyController.getAllCompanies );
router.get( "/:id", companyController.getCompanyById );
router.post( "/", companyMiddleware.validateCompanyData, companyController.createCompany );
router.put( "/:id", companyMiddleware.validateCompanyData, companyController.updateCompany );
router.delete( "/:id", companyController.deleteCompany );

module.exports = router;
