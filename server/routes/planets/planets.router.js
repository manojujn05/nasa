const express = require('express');

const PlanetsRouter = express.Router();
const { httpGetAllPlanets, } = require('./planets.controller');

PlanetsRouter.get('/planets', httpGetAllPlanets );

module.exports = PlanetsRouter;