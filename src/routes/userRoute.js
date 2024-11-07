const express = require( "express" );
const userMiddleware = require( "../middlewares/userMiddleware" );
const userController = require( "../controllers/userController" );

const router = express.Router();

router.get( "/", userController.getAllUsers );
router.get( "/:id", userController.getUserById );
router.post( "/", userMiddleware.validateUserData, userController.createUser );
router.put( "/:id", userMiddleware.validateUserData, userController.updateUser );
router.delete( "/:id", userController.deleteUser );

module.exports = router;
