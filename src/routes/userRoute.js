const express = require( "express" );
const userMiddleware = require( "../middlewares/userMiddleware" );
const userController = require( "../controllers/userController" );

// Inicializando o roteador
const router = express.Router();

// Definir as rotas relacionadas aos usuários
router.get( "/", userController.getAllUsers ); // Rota para obter todos os usuários
router.get( "/:id", userController.getUserById ); // Rota para obter um usuário específico por ID
router.post( "/", userMiddleware.validateUserData, userController.createUser ); // Rota para criar um novo usuário
router.put( "/:id", userMiddleware.validateUserData, userController.updateUser ); // Rota para atualizar um usuário por ID
router.delete( "/:id", userController.deleteUser ); // Rota para excluir um usuário por ID

module.exports = router;
