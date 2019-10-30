const express = require('express');
const StoryController = require('./controllers/StoryController');


const routes = express.Router();

routes.get('/stories', StoryController.index);
routes.post('/stories', StoryController.store);

module.exports = routes;