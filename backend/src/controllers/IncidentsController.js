const database = require('../database/database');

const PAGE_LIMIT = 5;
const INCIDENTS_TABLE = 'incidents';
const NGOS_TABLE = 'ngos';

module.exports = {
  async index(request, response) {
    const { page = 1 } = request.query;

    const [count] = await database(INCIDENTS_TABLE).count();

    const incidents = await database(INCIDENTS_TABLE)
      .join(NGOS_TABLE, 'ngos.id', '=', 'incidents.ngo_id')
      .select(
        'incidents.*',
        'ngos.name',
        'ngos.email',
        'ngos.whatsapp',
        'ngos.city',
        'ngos.uf'
      )
      .limit(PAGE_LIMIT)
      .offset((page - 1) * PAGE_LIMIT);

    response.header('X-Total-Count', count['count(*)']);
    return response.json(incidents);
  },
  async create(request, response) {
    const { title, description, value } = request.body;
    const ngo_id = request.headers.authorization;

    //Check if the ngo_id is valid, however only a identified ngo can create an incident
    const ngoID = await database(NGOS_TABLE)
      .select('name')
      .where('id', ngo_id);

    if (ngoID.length === 0) {
      console.log(ngoID);
      return response.status(401).json({ error: 'Invalid ID' });
    }

    const [id] = await database(INCIDENTS_TABLE).insert({
      description,
      ngo_id,
      title,
      value
    });

    return response.json({ id });
  },
  async delete(request, response) {
    const ngo_id = request.headers.authorization;
    const { id } = request.params;
    const incident = await database(INCIDENTS_TABLE)
      .where('id', id)
      .select('ngo_id')
      .first();

    //Check if returned something
    if (!incident) {
      return response.status(401).json({ error: 'No such item' });
    }

    if (incident.ngo_id !== ngo_id) {
      return response.status(401).json({ error: 'Operation not allowed' });
    }

    await database(INCIDENTS_TABLE)
      .where('id', id)
      .delete();

    return response.status(204).send();
  }
};
