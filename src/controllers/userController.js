const userService = require( "../services/userService" );

const userController = {
  
  getAllUsers: async ( req, res ) => { // Obter todos os usuários
    try {
      const results = await userService.getAllUsers();
      res.status( 200 ).json( results );
    } catch ( err ) {
      console.error( "Erro ao buscar usuários: ", err );
      res.status( 500 ).json({ error: "Erro ao buscar usuários" });
    }
  },

  getUserById: async ( req, res ) => { // Obter um usuário específico por ID
    const userId = req.params.id;
    try {
      const results = await userService.getUserById( userId );
      if ( results.length === 0 ) {
        return res.status( 404 ).json({ error: "Usuário não encontrado" });
      }
      res.status( 200 ).json( results[ 0 ]);
    } catch ( err ) {
      console.error( "Erro ao buscar usuário: ", err );
      res.status( 500 ).json({ error: "Erro ao buscar usuário" });
    }
  },

  createUser: async ( req, res ) => { // Criar um novo usuário
    const { name, email, phone, password, company_id, image, config } = req.body;
    try {
      const results = await userService.createUser({ name, email, phone, password, company_id, image, config });
      res.status( 201 ).json({ message: "Usuário criado com sucesso", userId: results.insertId });
    } catch ( err ) {
      console.error( "Erro ao criar usuário: ", err );
      res.status( 500 ).json({ error: "Erro ao criar usuário" });
    }
  },

  updateUser: async ( req, res ) => { // Atualizar um usuário por ID
    const userId = req.params.id;
    const { name, email, phone, password, company_id, image, config } = req.body;
    try {
      const results = await userService.updateUser( userId, { name, email, phone, password, company_id, image, config });
      if ( results.affectedRows === 0 ) {
        return res.status( 404 ).json({ error: "Usuário não encontrado" });
      }
      res.status( 200 ).json({ message: "Usuário atualizado com sucesso" });
    } catch ( err ) {
      console.error( "Erro ao atualizar usuário: ", err );
      res.status( 500 ).json({ error: "Erro ao atualizar usuário" });
    }
  },

  deleteUser: async ( req, res ) => { // Excluir um usuário por ID
    const userId = req.params.id;
    try {
      const results = await userService.deleteUser( userId );
      if ( results.affectedRows === 0 ) {
        return res.status( 404 ).json({ error: "Usuário não encontrado" });
      }
      res.status( 200 ).json({ message: "Usuário excluído com sucesso" });
    } catch ( err ) {
      console.error( "Erro ao excluir usuário: ", err );
      res.status( 500 ).json({ error: "Erro ao excluir usuário" });
    }
  }
  
};

module.exports = userController;
