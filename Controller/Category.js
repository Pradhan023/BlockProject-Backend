// this is controller file which will use to set logic inside the call back function and will export to router file and will use it on callback fun part as controller module

const {Data} = require("../dummyData")

const DataController = (req,res)=>{
    return res.send(Data);                //we will return res.send method so that code will not keep executing and should be return after it meet the logic or info part          
}


module.exports = {DataController};