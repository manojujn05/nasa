const path = require('path');
const express = require('express');
const cors  = require('cors');
const PlanetsRouter = require('./routes/planets/planets.router');
const LaunchesRouter = require('./routes/launches/launches.router');
const { publicDecrypt } = require('crypto');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(PlanetsRouter);
app.use(LaunchesRouter);
app.get('/*',(req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = app;