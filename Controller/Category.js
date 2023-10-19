// this is controller file which will use to set logic inside the call back function and will export to router file and will use it on callback fun part as controller module

const {BollywoodData,HollywoodData,TechnologyData,FitnessData,EducationData} = require("../dummyData")

const BollywoodController = (req,res)=>{
    return res.send(BollywoodData);                //we will return res.send method so that code will not keep executing and should be return after it meet the logic or info part          
}

const HollywoodController = (req,res)=>{
    return res.send(HollywoodData);                //we will return res.send method so that code will not keep executing and should be return after it meet the logic or info part
}

const TechnologyController = (req,res)=>{
    return res.send(TechnologyData);                //we will return res.send method so that code will not keep executing and should be return after it meet the logic or info part
}

const FitnessController = (req,res)=>{
    return res.send(FitnessData);                //we will return res.send method so that code will not keep executing and should be return after it meet the logic or info part
}

const EducationController = (req,res)=>{
    return res.send(EducationData)
}

module.exports = {BollywoodController,HollywoodController,TechnologyController,FitnessController,EducationController};