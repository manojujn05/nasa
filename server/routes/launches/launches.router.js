const express = require('express');

const LaunchesRouter = express.Router();
const { httpGetAllLaunches, httpAddNewLaunch, httpAbortLaunch } = require('./launches.controller');

LaunchesRouter.get('/launches', httpGetAllLaunches );
LaunchesRouter.post('/launches', httpAddNewLaunch );
LaunchesRouter.delete('/launches/:id', httpAbortLaunch );

module.exports = LaunchesRouter;