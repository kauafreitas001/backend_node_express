// Middleware para validação dos dados dos usuários
const userMiddleware = {
  validateUserData: ( req, res, next ) => {
    
    const { name, email, password } = req.body;
    if ( !name || !email || !password ) {
      return res.status( 400 ).json({ error: "Nome, email e senha são obrigatórios" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if ( !emailRegex.test( email )) {
      return res.status( 400 ).json({ error: "Email inválido" });
    }

    if ( password.length < 6 ) {
      return res.status( 400 ).json({ error: "A senha deve ter pelo menos 6 caracteres" });
    }
  
    next();
  },
};

module.exports = userMiddleware;
