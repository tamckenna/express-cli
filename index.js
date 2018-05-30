/*
    Application:        node-cli
    Author(s):          tmckenna
    Created:            2018-05-30
    Last Modified:      2018-05-30
*/

//Load Environment Variables
'use strict';
const env = require('dotenv').config({path: 'process.env'});
var isWin = process.platform === "win32";

//Application Configuration
const appName = process.env.APP_NAME;
const appEnv = process.env.APP_ENV;
const logType = process.env.MORGAN_LOG_TYPE;

//Express Router Configuration
const tcpProtocol = process.env.APP_TCP;
const hostnameString = process.env.APP_HOST_NAME;
const portNumber = process.env.PORT;
const applicationString = process.env.APP_ROUTE;
const routeString = process.env.API_ROUTE;

//Require Dependency Packages
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');
const {spawnSync} = require('child_process');

//Setup express router for POST requests
const router = express.Router();

router.route('/' + routeString).post(function(req, res){

    //Run Command with input
    console.log("Cmd: " + req.body.cmd);

    //Run PowerShell Script for Windows & Bash for everything else
    if(isWin){
        var child = spawnSync("powershell.exe", [".\\cmdScript.ps1", req.body.cmd]);
    }else{
        var child = spawnSync("./cmdScript.sh", [req.body.cmd]);
    }    

    //Response Message
    res.json({
        output: "success"
    });
});

//Configure morgan application logger, json bodyParser, and listening port
app.use(morgan(logType));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/' + applicationString, router);

//Start the Express Server
//================================================
console.log("Application running in: " + appEnv + " environment.");
app.listen(portNumber);
console.log('Listener at: ' + tcpProtocol + '://' + hostnameString + ':' + portNumber + '/' + applicationString + '/' + routeString);

