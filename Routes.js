//Route file for the Api whhich will be searched by giving end point i.e /bollywood

const ExpressRoutes = require("express").Router();

const  {BollywoodController,HollywoodController,TechnologyController,FitnessController,EducationController} = require("./Controller/Category")   //variable name should be same as exporting name

ExpressRoutes.get("/bollywood",BollywoodController);

ExpressRoutes.get("/hollywood",HollywoodController);

ExpressRoutes.get("/technology",TechnologyController);

ExpressRoutes.get("/fitness",FitnessController);

ExpressRoutes.get("/education",EducationController);

module.exports = ExpressRoutes;