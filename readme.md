API DE LIVROS

API feita em Node.js com Express


COMO RODAR

npm install express
node index.js

O servidor vai rodar em http://localhost:3000


ENDPOINTS

GET /api/livros
Lista todos os livros cadastrados
http://localhost:3000/api/livros

GET /api/livros/:id
Busca um livro pelo id
http://localhost:3000/api/livros/1
Se não achar retorna 404

POST /api/livros
cria um novo livro, todos os campos são obrigatórios
Body:
{
  "titulo": "O Código Da Vinci",
  "autor": "Dan Brown",
  "ano": 2003,
  "genero": "Suspense",
  "nota": 8.7
}
Se faltar algum campo retorna 400

PUT /api/livros/:id
Atualiza um livro pelo id
Body igual ao POST com os campos que quiser atualizar

DELETE /api/livros/:id
Deleta um livro pelo id
Retorna 204 se deletou com sucesso
