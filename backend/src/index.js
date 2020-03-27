const express = require("express");
const routes = require("./routes");

const app = express();
app.use(express.json());
app.use(routes);
app.listen(3333);

/**
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Recursos são referentes a cada entidade que possa ser chamada da api
 */

/**
 * Tipos de parâmetros:
 *
 * Query params: Parâmetros nomeados enviados na rota após "?" intercalados por "&". Exemplo: (Filtros, paginação)
 * Route params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * Banco de dados no mercado
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Como acessar a base de dados utilizando:
 * - Driver: SELECT * FROM users
 * - Query Builder: table('users').select('*').where()
 */

/**
 * Nesse projeto o banco de dados utilizado será o SQLite
 * e como Query Builder o Knex
 */