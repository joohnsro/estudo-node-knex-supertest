const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('client', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('shoul be able to create a new client', async () => {
        const response = await request(app)
            .post('/clients')
            .send({
                name: "Pessoa1",
                birthDate: "1985-03-06",
                address: "Rua, 123",
                email: "pessoa1@email.com",
                phone: "01112345678",
                whatsapp: "011912345678",
                facebook: "facebook.com",
                instagram: "instagram.com"
            });

        expect(response.body).toHaveProperty('id');
    });

    it('shoul be able to update a  client', async () => {
        const response = await request(app)
            .put('/clients/1')
            .send({
                name: "Pessoa1 novo nome",
                birthDate: "1985-03-06",
                address: "Rua, 123",
                email: "pessoa1@email.com",
                phone: "01112345678",
                whatsapp: "011912345678",
                facebook: "facebook.com",
                instagram: "instagram.com"
            });

        expect(204);
    });
});