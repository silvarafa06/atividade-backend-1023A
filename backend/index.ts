import fastify from 'fastify';
import cors from '@fastify/cors';
import rotaMaterias from './rotas/materias';
import rotaAtividades from './rotas/atividades';

const app = fastify();
app.register(cors);

// ROTAS
app.register(rotaMaterias);
app.register(rotaAtividades);

app.listen({ port: 8000 }, () => {
  console.log("Servidor rodando em http://localhost:8000");
});
