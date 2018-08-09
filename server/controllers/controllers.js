const mongoose = require('mongoose');
const Food = mongoose.model('Food');
var request = require('request');
module.exports = {
    getFood: (req, res)=>{
        Food.find({}, (err, food)=>{
            if (err){
                res.json(err);
            }
            else{
                res.json(food);
            }
        })
    },

}