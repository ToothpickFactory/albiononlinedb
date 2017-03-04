const config					= require("config");
const express					= require("express");
const path						= require("path");
const app						 	= express();
const bodyParser			= require('body-parser');
const cors            = require('cors');
const getDirectories	= require('./util/directoryFinder');
const mongo           = require('./connections/mongo');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'www/dist')));

// Require all routes from the routes directory
getDirectories(__dirname + '/api/').forEach(dir => require(`${__dirname}/api/${dir}`)(app));

// Connect to DB
mongo.setup();

app.listen(config.port, () => { console.log(`Albion-Server running on port ${config.port}`) });
