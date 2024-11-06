# Back-end com express - API

## Descrição
Este projeto foi desenvolvido como um portfólio para demonstrar conhecimentos básicos em construção de APIs utilizando Node.js, Express e MySQL. O projeto realiza operações básicas de CRUD para manipular as tabelas de usuários e empresas, permitindo criação, leitura, atualização e exclusão de registros.

## Estrutura do Projeto
A API foi construída utilizando **Node.js**, com **Express** como framework e **MySQL** como banco de dados. As rotas, controladores, serviços e modelos foram organizados para seguir uma separação clara de responsabilidades, facilitando a manutenção e a escalabilidade.

### Principais Tecnologias
- **Node.js**: Ambiente de execução JavaScript no lado do servidor.
- **Express**: Framework para construção de APIs.
- **MySQL**: Banco de dados relacional para armazenar informações sobre usuários e empresas.

### Estrutura de Pastas
- **config/**: Arquivo de configuração do banco de dados.
- **controllers/**: Lógica dos endpoints da API.
- **database/**: Scripts para migrações e criação de tabelas no banco de dados.
  - **migrations/**: Scripts de criação de tabelas (`createUsersTable.js`, `createCompanyTable.js` etc).
- **middlewares/**: Middlewares para validação e autenticação.
- **models/**: Definição da camada de acesso ao banco de dados.
- **routes/**: Definição das rotas e integração com controladores.
- **services/**: Lógica de negócios que fica entre os controladores e os modelos.
- **utils/**: Funções utilitárias auxiliares.
- **server.js**: Ponto de entrada para iniciar o servidor.
- **app.js**: Configuração inicial do Express.

## Funcionalidades Principais
- **Cadastro de Usuários**: Criação de novos usuários, interligação com empresas e armazenamento de informações como imagem e configurações em JSON.
- **Cadastro de Empresas**: Registro de novas empresas com informações relevantes, como nome, email, telefone e configurações.

## Configuração do Projeto

### Requisitos
- **Node.js** (v14 ou superior)
- **MySQL**

### Instalação
1. Clone o repositório: **git clone <url-do-repositorio>**

2. Instale as dependências: **npm install**

3. Configure o banco de dados:
   - Crie um banco de dados MySQL.
   - Configure as variáveis de ambiente ou edite o arquivo `config/db.js` com suas credenciais do banco de dados.

### Executar a Aplicação
1. Inicie o servidor: **npm start**

2. A API estará disponível em: `http://localhost:3000`

## Endpoints da API

### Usuários
- **GET** `/users` - Obter todos os usuários.
- **GET** `/users/:id` - Obter um usuário específico por ID.
- **POST** `/users` - Criar um novo usuário.
- **PUT** `/users/:id` - Atualizar um usuário por ID.
- **DELETE** `/users/:id` - Excluir um usuário por ID.

### Empresas
- **GET** `/companies` - Obter todas as empresas.
- **GET** `/companies/:id` - Obter uma empresa específica por ID.
- **POST** `/companies` - Criar uma nova empresa.
- **PUT** `/companies/:id` - Atualizar uma empresa por ID.
- **DELETE** `/companies/:id` - Excluir uma empresa por ID.

## Exemplos de Uso
### Criar um Novo Usuário
**Requisição:**
```http
POST /users
Content-Type: application/json

{
  "name": "João Silva",
  "email": "joao.silva@example.com",
  "password": "senha123",
  "company_id": 1,
  "image": "path/to/image.jpg",
  "config": {
    "theme": "dark",
    "notifications": true
  }
}
```
**Resposta:**
```json
{
  "message": "Usuário criado com sucesso",
  "userId": 1
}
```
