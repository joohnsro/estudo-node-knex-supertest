const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const ClientController = require('./controllers/ClientController');
const ServiceController = require('./controllers/ServiceController');
const ScheduleController = require('./controllers/ScheduleController');

const routes = express.Router();

routes.get('/clients', ClientController.index);
routes.post('/clients', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        birthDate: Joi.string().required().length(10),
        address: Joi.string().required(),
        email: Joi.string().required().email(),
        phone: Joi.string().min(8).max(15),
        whatsapp: Joi.string().required().min(8).max(15),
        facebook: Joi.string().allow(''),
        instagram: Joi.string().allow(''),
    }),
}), ClientController.create);
routes.put('/clients/:id', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        birthDate: Joi.string().required().length(10),
        address: Joi.string().required(),
        email: Joi.string().required().email(),
        phone: Joi.string().min(8).max(15),
        whatsapp: Joi.string().required().min(8).max(15),
        facebook: Joi.string().allow(''),
        instagram: Joi.string().allow(''),
    }),
}), ClientController.update);
routes.delete('/clients/:id', ClientController.delete);

routes.get('/services', ServiceController.index);
routes.post('/services', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        duration: Joi.number().required()
    }),
}), ServiceController.create);
routes.put('/services/:id', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        duration: Joi.number().required()
    }),
}), ServiceController.update);
routes.delete('/services/:id', ServiceController.delete);

routes.get('/schedules', ScheduleController.index);
routes.post('/schedules', celebrate({
    [Segments.BODY]: Joi.object().keys({
        schedule: Joi.date().required(),
        status: Joi.string().required(),
        client_id: Joi.number().required(),
        service_id: Joi.number().required()
    }),
}), ScheduleController.create);
routes.put('/schedules/:id', ScheduleController.update);
routes.delete('/schedules/:id', ScheduleController.delete);

module.exports = routes;