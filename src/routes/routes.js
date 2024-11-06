const express = require( "express" );

const companyRoute = require( "./companyRoute" );
const userRoute = require( "./userRoute" );

// Inicializando o roteador
const router = express.Router();

// Usar as rotas definidas
router.use( "/empresas", companyRoute );
router.use( "/usuarios", userRoute );

module.exports = router;
