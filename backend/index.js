const express = require("express");
const app = express();

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
app.get("/", (request, response) => {
  return response.send("Hello World!!!");
});

app.listen(3333);
