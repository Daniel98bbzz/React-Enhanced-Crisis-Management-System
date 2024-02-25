require('dotenv').config();
const request = require('supertest');
const mongoose = require('mongoose');
const app = require("../server");


describe('Counseling Sessions CRUD Operations', () => {
    beforeAll(async () => {
        const mongoDBURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/counseling-sessions`;
        await mongoose.connect(mongoDBURI, { useNewUrlParser: true, useUnifiedTopology: true });
    });

    afterAll(async () => {
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
    });

    it('should create a new session', async () => {
        const newSession = {
            clientName: 'John Doe',
            date: '2024-02-01',
            time: '10:00',
            topic: 'Stress Management',
            notes: 'First session, introductory meeting'
        };

        const response = await request(app)
            .post('/api/sessions')
            .send(newSession);

        expect(response.statusCode).toBe(201);
        expect(response.body.clientName).toEqual(newSession.clientName);
    });

    it('should retrieve all sessions', async () => {
        const response = await request(app).get('/api/sessions');
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy();
    });

    it('should retrieve a session by id', async () => {
        const response = await request(app).get('/api/sessions/65c626e2a1d112607c1c8b1b');
        expect(response.statusCode).toBe(200);
    });

    it('should update a session by id', async () => {
        const updatedInfo = { topic: 'Updated Topic' };
        const response = await request(app)
            .put('/api/sessions/65c626e2a1d112607c1c8b1b')
            .send(updatedInfo);

        expect(response.statusCode).toBe(200);
    });

    it('should delete a session by id', async () => {
        const response = await request(app).delete('/api/sessions/65c62b06a74b633d9cccde07');
        expect(response.statusCode).toBe(200);
        // Additional assertions based on the expected outcome
    });
});
