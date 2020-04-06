const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const schedules = await connection('schedules')
            .join('clients', 'clients.id', '=', 'schedules.client_id')
            .join('services', 'services.id', '=', 'schedules.service_id')
            .select([
                'schedules.*',
                'clients.name as client_name',
                'services.name as service_name'
            ]);

        return response.json(schedules);
    },

    async create(request, response) {
        const { schedule, status, client_id, service_id } = request.body;

        const weekday = new Date(schedule).getDay();

        await connection('schedules').insert({
            schedule,
            weekday,
            status,
            client_id,
            service_id,
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
        const { schedule, status, service_id } = request.body;

        const weekday = new Date(schedule).getDay();

        await connection('schedules')
            .where('id', id)
            .update({
                schedule,
                weekday,
                status,
                service_id,
            });

        return response.status(204).send();
    },

    async delete(request, respose) {
        const { id } = request.params;

        await connection('schedules').where('id', id).delete();

        return respose.status(200).send();
    },
}