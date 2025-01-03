const request = require('supertest');
const app = require('../server');  

describe('Weather Controller', () => {
  it('should fetch weather data for a city', async () => {
    const response = await request(app).get('/api/weather/London');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('weather');
    expect(response.body).toHaveProperty('temp');
  });

  it('should return an error if the city is not found', async () => {
    const response = await request(app).get('/api/weather/InvalidCity');
    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty('message');
  });
});
