const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const services = await connection('services').select('*');

        return response.json(services);
    },

    async create(request, response) {
        const { name, duration } = request.body;

        await connection('services').insert({
            name,
            duration,
        })
        .then(([id]) => {
            return response.json({ id });
        })
        .catch((error) => {
            return response.json({ error });
        });
    },

    async update(request, response) {
        const { id } = request.params;
        const { name, duration } = request.body;

        await connection('services')
            .where('id', id)
            .update({
                name,
                duration,
            });
        
        return response.status(204).send();
    },

    async delete( request, response ) {
        const { id } = request.params;

        await connection('services').where('id', id).delete();

        return response.status(200).send();
    }
}