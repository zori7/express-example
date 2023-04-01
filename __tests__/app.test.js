const request = require('supertest');
const { app, server } = require('../app');

describe('Controller layer', () => {
    describe('GET /users', () => {
        it('should return an array of users', async () => {
            const res = await request(app).get('/users');
            expect(res.status).toBe(200);
            expect(res.body).toBeInstanceOf(Array);
            expect(res.body).toHaveLength(2);
        });
    });

    describe('GET /users/:id', () => {
        it('should return a user by ID', async () => {
            const res = await request(app).get('/users/1');
            expect(res.status).toBe(200);
            expect(res.body.id).toBe(1);
        });

        it('should return a 404 if user ID does not exist', async () => {
            const res = await request(app).get('/users/999');
            expect(res.status).toBe(404);
        });
    });

    describe('POST /users', () => {
        it('should create a new user', async () => {
            const newUser = { name: 'John Doe', age: 30 };
            const res = await request(app).post('/users').send(newUser);
            expect(res.status).toBe(201);
            expect(res.body.name).toBe(newUser.name);
            expect(res.body.age).toBe(newUser.age);
        });
    });
});

afterAll((done) => {
    server.close(done);
});
