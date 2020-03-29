const database = require('../database/database');

module.exports = {
  async create(request, response) {
    const { id } = request.body;
    const ngo = await database('ngos')
      .where('id', id)
      .select('name')
      .first();

    if (!ngo) {
      return response.status(400).json({ error: 'No ngo found with this ID' });
    }
    return response.json(ngo);
  },
  async delete(request, response) {
    await database('ngos');
  }
};
