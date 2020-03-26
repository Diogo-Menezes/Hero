const connection = require('../database/connection');

const PAGE_LIMIT = 5;
const INCIDENTS_TABLE = 'incidents';

module.exports = {
  async index(request, response) {
    const { page = 1 } = request.query;

    const [count] = await connection(INCIDENTS_TABLE).count();

    const incidents = await connection(INCIDENTS_TABLE)
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .select(
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf'
      )
      .limit(PAGE_LIMIT)
      .offset((page - 1) * PAGE_LIMIT);

    response.header('X-Total-Count', count['count(*)']);
    return response.json(incidents);
  },
  async create(request, response) {
    const { title, description, value } = request.body;
    const ong_id = request.headers.authorization;

    const [id] = await connection(INCIDENTS_TABLE).insert({
      description,
      ong_id,
      title,
      value
    });

    return response.json({ id });
  },
  async delete(request, response) {
    const ong_id = request.headers.authorization;
    const { id } = request.params;
    const incident = await connection(INCIDENTS_TABLE)
      .where('id', id)
      .select('ong_id')
      .first();
      
    if (incident.ong_id !== ong_id) {
      return response.status(401).json({ error: 'Operation not allowed' });
    }

    await connection(INCIDENTS_TABLE)
      .where('id', id)
      .delete();

    return response.status(204).send();
  }
};
