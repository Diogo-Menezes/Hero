const request = require('supertest');
const app = require('../../src/app.js');
const connection = require('../../src/database/connection');

beforeEach(async () => {
  await connection.migrate.latest();
});

afterAll(async () => {
  await connection.migrate.rollback();
  await connection.destroy();
});

describe('ONG', () => {
  it('Should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: 'ONG name',
        email: 'diogo@mail.com',
        whatsapp: '4568565585',
        city: 'Lisbon',
        uf: 'AA'
      });
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});
