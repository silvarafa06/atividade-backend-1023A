import { FastifyInstance } from 'fastify';

async function rotaMaterias(fastify: FastifyInstance, options: any) {
  fastify.get('/materias', async (req, res) => {
    return [{ id: 1, nome: "Português" }];
  });
}

export default rotaMaterias;
