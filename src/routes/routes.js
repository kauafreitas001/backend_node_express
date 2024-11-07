const express = require( "express" );

const companyRoute = require( "./companyRoute" );
const userRoute = require( "./userRoute" );

const router = express.Router();

router.use( "/empresas", companyRoute );
router.use( "/usuarios", userRoute );

module.exports = router;
