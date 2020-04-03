const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const clients = await connection('clients').select('*');

        return response.json(clients);
    },

    async create(request, response) {
        const { name, birthDate, address, email, phone, whatsapp, facebook, instagram } = request.body;

        await connection('clients').insert({
            name,
            birthDate,
            address,
            email,
            phone,
            whatsapp,
            facebook,
            instagram
        })
        .then(([id]) => {
            return response.json({ id });
        })
        .catch((error) => {
            return response.json({ error })
        })
    },

    async delete(request, response){

        const { id } = request.params;

        await connection('clients').where('id', id).delete();
        
        return response.status(204).send();
    },
}