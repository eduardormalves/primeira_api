const express = require('express');
const app = express();

app.use(express.json());

// Dados em memória
let livros = [
    { id: 1, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954, genero: "Fantasia", nota: 9.8 },
    { id: 2, titulo: "1984", autor: "George Orwell", ano: 1949, genero: "Distopia", nota: 9.5 },
    { id: 3, titulo: "Dom Quixote", autor: "Miguel de Cervantes", ano: 1605, genero: "Classico", nota: 9.0 },
    { id: 4, titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", ano: 1943, genero: "Fabula", nota: 9.7 },
    { id: 5, titulo: "Harry Potter e a Pedra Filosofal", autor: "J.K. Rowling", ano: 1997, genero: "Fantasia", nota: 9.3 },
    { id: 6, titulo: "O Hobbit", autor: "J.R.R. Tolkien", ano: 1937, genero: "Fantasia", nota: 9.2 },
    { id: 7, titulo: "Cem Anos de Solidão", autor: "Gabriel García Márquez", ano: 1967, genero: "Ficcao", nota: 9.4 },
    { id: 8, titulo: "A Metamorfose", autor: "Franz Kafka", ano: 1915, genero: "Classico", nota: 8.8 },
    { id: 9, titulo: "O Alquimista", autor: "Paulo Coelho", ano: 1988, genero: "Ficcao", nota: 8.5 },
    { id: 10, titulo: "Admirável Mundo Novo", autor: "Aldous Huxley", ano: 1932, genero: "Distopia", nota: 9.1 },
    { id: 11, titulo: "Crime e Castigo", autor: "Fiódor Dostoiévski", ano: 1866, genero: "Classico", nota: 9.3 },
    { id: 12, titulo: "A Revolução dos Bichos", autor: "George Orwell", ano: 1945, genero: "Distopia", nota: 8.9 },
];

let proximoId = 13;

// GET /api/livros - Listar todos
app.get('/api/livros', (req, res) => {
    res.json(livros);
});

// GET /api/livros/:id - Buscar por ID
app.get('/api/livros/:id', (req, res) => {
    const livro = livros.find(l => l.id === parseInt(req.params.id));
    if (!livro) return res.status(404).json({ erro: "Livro não encontrado" });
    res.json(livro);
});

// POST /api/livros - Criar novo
app.post('/api/livros', (req, res) => {
    const { titulo, autor, ano, genero, nota } = req.body;

    if (!titulo || !autor || !ano || !genero || !nota) {
        return res.status(400).json({ erro: "Campos obrigatórios faltando" });
    }

    const novoLivro = { id: proximoId++, titulo, autor, ano, genero, nota };
    livros.push(novoLivro);
    res.status(201).json(novoLivro);
});

// PUT /api/livros/:id - Atualizar
app.put('/api/livros/:id', (req, res) => {
    const livro = livros.find(l => l.id === parseInt(req.params.id));
    if (!livro) return res.status(404).json({ erro: "Livro não encontrado" });

    const { titulo, autor, ano, genero, nota } = req.body;
    if (!titulo || !autor || !ano || !genero || !nota) {
        return res.status(400).json({ erro: "Campos obrigatórios faltando" });
    }

    livro.titulo = titulo;
    livro.autor = autor;
    livro.ano = ano;
    livro.genero = genero;
    livro.nota = nota;
    res.json(livro);
});

// DELETE /api/livros/:id - Remover
app.delete('/api/livros/:id', (req, res) => {
    const index = livros.findIndex(l => l.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ erro: "Livro não encontrado" });

    livros.splice(index, 1);
    res.status(204).send();
});

app.listen(3000, () => console.log('🚀 API CRUD completa na porta 3000'));
