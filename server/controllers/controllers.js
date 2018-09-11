const mongoose = require('mongoose');
const Food = mongoose.model('Food');
const Activity = mongoose.model('Activity');
const Schedule = mongoose.model('Schedule');
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
    addFood: (req, res)=>{
        Food.create(req.body, (err, food)=>{
            if (err){
                res.json(err);
            }
            else{
                res.json(food);
            }
        })
    },
    singleFood: (req, res)=>{
        Food.findOne({_id: req.params.id}, (err, food)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(food);
            }
        })
    },
    deleteFood: (req, res)=>{
        Food.remove({_id: req.params.id}, (err, food)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(food);
            }
        })
    },
    editFood: (req, res)=>{
        Food.update({_id: req.params.id}, req.body, (err, data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },
    addActivity: (req, res)=>{
        Activity.create(req.body, (err, activity)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(activity);
            }
        })
    },
    addSchedule: (req, res)=>{
        Schedule.create(req.body, (err, schedule)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(schedule);
            }
        })
    },
    allSchedule: (req, res)=>{
        Schedule.find({}, (err, data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    },
    singleSchedule: (req, res)=>{
        Schedule.findOne({_id: req.params.id}, (err, schedule)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(schedule);
            }
        })
    },
    deleteSchedule: (req, res)=>{
        Schedule.findOneAndRemove({_id: req.params.id}, (err, data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    }
}