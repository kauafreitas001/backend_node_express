// Middleware para validação dos dados dos usuários
const userMiddleware = {
  validateUserData: ( req, res, next ) => {
    const { name, email, password } = req.body;
    if ( !name || !email || !password ) {
      return res.status( 400 ).json({ error: "Nome, email e senha são obrigatórios" });
    }

    // Verificar se o email é válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if ( !emailRegex.test( email )) {
      return res.status( 400 ).json({ error: "Email inválido" });
    }

    // Verificar se a senha tem pelo menos 6 caracteres
    if ( password.length < 6 ) {
      return res.status( 400 ).json({ error: "A senha deve ter pelo menos 6 caracteres" });
    }
  
    next(); // Prosseguir para o próximo middleware ou controlador
  },
};

module.exports = userMiddleware;
