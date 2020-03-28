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

describe('New Incident', () => {
  async function createIncident() {
    return await request(app)
      .post('/incidents')
      .set('authorization', 'c4196921')
      .send({ title: 'Title', description: 'Desc', value: 100 });
  }

  it('Should create a new Incident', async () => {
    const response = await createIncident(); 

    //If it's successful it should return the id
    expect(response.body).toHaveProperty('id');

    //Since there's no incident in the table the
    //returned value from the id should be equal to 1
    expect(response.body.id).toBe(1);

    const response2 = await createIncident();
    //On the second response the id should be 2
    expect(response2.body.id).toBe(2);
  });
});
