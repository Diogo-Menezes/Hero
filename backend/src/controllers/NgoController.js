const database = require('../database/database');
const generateUniqueId = require('../utils/generateUniqueId');

const NGO_TABLE = 'ngos';

module.exports = {
  async index(request, response) {
    const ngos = await database(NGO_TABLE).select('*');
    return response.json(ngos);
  },
  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;
    const id = generateUniqueId();

    await database(NGO_TABLE).insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });
    return response.json({ id });
  }
};
