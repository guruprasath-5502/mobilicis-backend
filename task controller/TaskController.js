const UserModel = require("../models/UserModel")

const getUsers = async(req,res) => {
    try{
        const users = await UserModel.find({});
        res.status(200).json(users)
    }catch(err){
        res.status(400).json({ error: err.message });
    }
};


const apiOne = async(req,res) => {
    try{
        const api1 = await UserModel.find({
            $and: [
                { car: { $in: ["BMW", "Mercedes"] } },
                { income: { $lt: "$5" } }
            ]
          })
        res.status(200).json(api1)
    }catch(err){
        res.status(400).json({ error: err.message });
    }
}

const apiTwo = async(req,res) => {
    try{
        const api2 = await UserModel.find({
            $and: [
              { gender: "Male" },
              { $expr: { $gt: [ { $toInt: "$phone_price" }, 10000 ] } }
            ]
          })
        res.status(200).json(api2)
    }catch(err){
        res.status(400).json({ error: err.message });
    }
}

const apiThree = async(req,res) => {
    try{
        const api3 = await UserModel.find({
            $and: [
              { last_name: /^M/ },
              { $expr: { $gt: [ { $strLenCP: "$quote" }, 15 ] } },
              
            ]
          })
        res.status(200).json(api3)
    }catch(err){
        res.status(400).json({ error: err.message });
    }
}


const apiFour = async(req,res) => {
    try{
        const api4 = await UserModel.find({
            $and: [
                { car: { $in: ["BMW", "Mercedes", "Audi"] } },
                { email: { $not: /\d/ } }
              ]
        })
        res.status(200).json(api4)
    }catch(err){
        res.status(400).json({ error: err.message });
    }
}

const apiFive = async(req,res) => {
    try{
        const api5 = await UserModel.aggregate([
            { $group: {
                _id: "$city",
                count: { $sum: 1 },
                avgIncome: { $avg: { $toDouble: { $substr: ["$income", 1, -1] } } }
              }
            },
            { $sort: { count: -1 } },
            { $limit: 10 }
          ])
        res.status(200).json(api5)
    }catch(err){
        res.status(400).json({ error: err.message });
    }
}

module.exports = { getUsers , apiFive , apiFour , apiThree , apiTwo , apiOne};



