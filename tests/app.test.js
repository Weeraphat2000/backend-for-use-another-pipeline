const request = require('supertest');
const app = require('../src/app');

describe('API Endpoints', () => {
  describe('GET /', () => {
    test('should return welcome message', async () => {
      const response = await request(app).get('/');

      expect(response.status).toBe(200);
      expect(response.body.message).toBe('Welcome to Backend API');
    });
  });

  describe('GET /health', () => {
    test('should return health status', async () => {
      const response = await request(app).get('/health');

      expect(response.status).toBe(200);
      expect(response.body.status).toBe('healthy');
      expect(response.body.timestamp).toBeDefined();
    });
  });

  describe('GET /api/users', () => {
    test('should return list of users', async () => {
      const response = await request(app).get('/api/users');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBe(2);
      expect(response.body[0]).toHaveProperty('id');
      expect(response.body[0]).toHaveProperty('name');
      expect(response.body[0]).toHaveProperty('email');
    });
  });

  describe('GET /api/users/:id', () => {
    test('should return user by id', async () => {
      const response = await request(app).get('/api/users/1');

      expect(response.status).toBe(200);
      expect(response.body.id).toBe(1);
      expect(response.body.name).toBeDefined();
    });

    test('should return 400 for invalid user id', async () => {
      const response = await request(app).get('/api/users/0');

      expect(response.status).toBe(400);
      expect(response.body.error).toBe('Invalid user ID');
    });
  });

  describe('POST /api/users', () => {
    test('should create a new user', async () => {
      const newUser = { name: 'Test User', email: 'test@example.com' };

      const response = await request(app).post('/api/users').send(newUser);

      expect(response.status).toBe(201);
      expect(response.body.name).toBe('Test User');
      expect(response.body.email).toBe('test@example.com');
      expect(response.body.id).toBeDefined();
    });

    test('should return 400 when name is missing', async () => {
      const response = await request(app).post('/api/users').send({ email: 'test@example.com' });

      expect(response.status).toBe(400);
      expect(response.body.error).toBe('Name and email are required');
    });

    test('should return 400 when email is missing', async () => {
      const response = await request(app).post('/api/users').send({ name: 'Test User' });

      expect(response.status).toBe(400);
      expect(response.body.error).toBe('Name and email are required');
    });
  });
});
