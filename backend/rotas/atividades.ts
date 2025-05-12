import { FastifyInstance } from 'fastify';

async function rotaAtividades(fastify: FastifyInstance, options: any) {
  fastify.get('/atividades', async (req, res) => {
    return [{ id: 1, nome: "Trabalho de História" }];
  });
}

export default rotaAtividades;
