const database = require('../database/database');

module.exports = {
  async index(request, response) {
    const ngo_id = request.headers.authorization;
    const incidents = await database('incidents')
      .select('*')
      .where('ngo_id', ngo_id);
    return response.json(incidents);
  }
};
