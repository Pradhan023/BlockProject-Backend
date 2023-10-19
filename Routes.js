//Route file for the Api whhich will be searched by giving end point i.e /bollywood

const ExpressRoutes = require("express").Router();

const  {DataController} = require("./Controller/Category")   //variable name should be same as exporting name

ExpressRoutes.get("/data",DataController);

module.exports = ExpressRoutes;