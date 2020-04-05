const express = require('express');

const routes = express.Router();

const ClientController = require('./controllers/ClientController');
const ServiceController = require('./controllers/ServiceController');
const ScheduleController = require('./controllers/ScheduleController');

routes.get('/clients', ClientController.index);
routes.post('/clients', ClientController.create);
routes.put('/clients/:id', ClientController.update);
routes.delete('/clients/:id', ClientController.delete);

routes.get('/services', ServiceController.index);
routes.post('/services', ServiceController.create);
routes.put('/services/:id', ServiceController.update);
routes.delete('/services/:id', ServiceController.delete);

routes.get('/schedules', ScheduleController.index);
routes.post('/schedules', ScheduleController.create);
routes.put('/schedules/:id', ScheduleController.update);
routes.delete('/schedules/:id', ScheduleController.delete);

module.exports = routes;