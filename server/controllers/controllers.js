const mongoose = require('mongoose');
const Breakfast = mongoose.model('Breakfast');
const Lunch = mongoose.model('Lunch');
const Dinner = mongoose.model('Dinner');
const Activity = mongoose.model('Activity');
const Schedule = mongoose.model('Schedule');
const User = mongoose.model('User');
const express = require('express');
const bcrypt =  require('bcrypt-promise');
const session = require('express-session');
const app = express();
module.exports = {
    getBreakfast: (req, res)=>{
        Breakfast.find({}, (err, food)=>{
            if (err){
                res.json(err);
            }
            else{
                res.json(food);
            }
        })
    },
    getLunch: (req, res)=>{
        Lunch.find({}, (err, lunch)=>{
            if (err){
                res.json(err);
            }
            else{
                res.json(lunch);
            }
        })
    },
    getDinner: (req, res)=>{
        Dinner.find({}, (err, dinner)=>{
            if (err){
                res.json(err);
            }
            else{
                res.json(dinner);
            }
        })
    },
    addBreakfast: (req, res)=>{
        User.findOneAndUpdate({first_name: req.session.first_name, "schedule._id" : req.params.s_id}, 
        {
            "$push": {
                "schedule.$.Breakfast": req.body,
        }
    },
        
    (err, data)=>{
        if(err){
            console.log("ERROROROROR", err);
            res.json(err)
        } else {
            console.log("DATATATAT", data)
            res.json(data)
        }
    })

    },
    addLunch: (req, res)=>{
        User.findOneAndUpdate({first_name: req.session.first_name, "schedule._id" : req.params.s_id}, 
        {
            "$push": {
                "schedule.$.Lunch": req.body,
        }
    },
        
    (err, data)=>{
        if(err){
            console.log("ERROROROROR", err);
            res.json(err)
        } else {
            console.log("DATATATAT", data)
            res.json(data)
        }
    })

    },
    addDinner: (req, res)=>{
        User.findOneAndUpdate({first_name: req.session.first_name, "schedule._id" : req.params.s_id}, 
        {
            "$push": {
                "schedule.$.Dinner": req.body,
        }
    },
        
    (err, data)=>{
        if(err){
            console.log("ERROROROROR", err);
            res.json(err)
        } else {
            console.log("DATATATAT", data)
            res.json(data)
        }
    })

    },
    singleFood: (req, res)=>{
        Breakfast.findOne({_id: req.params.id}, (err, food)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(food);
            }
        })
    },
    deleteFood: (req, res)=>{
        Breakfast.remove({_id: req.params.id}, (err, food)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(food);
            }
        })
    },
    editFood: (req, res)=>{
        Breakfast.update({_id: req.params.id}, req.body, (err, data)=>{
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
        console.log("user session", req.session.first_name)
        User.findOne({first_name: req.session.first_name}, (err, user)=>{
            console.log("hi", user)
            if(err){
                res.json(err);
            }
            else{
                User.update({_id: user._id}, {$push: {schedule: req.body}}, (err, data)=>{
                    if(err){
                        res.json(err)
                    }
                    else{
                        console.log("SUCCC!")
                        res.json(data);
                    }
            })
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
        console.log("just to make sure", req.params.id)
        Schedule.findById({_id: req.params.id}, (err, schedule)=>{
            console.log("Scheudle before err", schedule)
            if(err){
                console.log(err);
                res.json(err);
            }
            else{
                console.log("controlllllerr ", schedule);
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
    },
    editSchedule: (req, res)=>{
        console.log("we in motion")
        console.log(req.session);
        console.log(req.body);
        console.log(req.params.id);
        console.log("session id: ", req.session.first_name)
        console.log("BODY", req.body);
        
        User.findOneAndUpdate({first_name: req.session.first_name, "schedule._id" : req.body._id}, 
            {
                "$set": {
                    "schedule.$.Breakfast_time": req.body.Breakfast_time,
                    "schedule.$.Lunch_time": req.body.Lunch_time,
                    "schedule.$.Dinner_time": req.body.Dinner_time,
            }
        },
            
        (err, data)=>{
            if(err){
                console.log("ERROROROROR", err);
                res.json(err)
            } else {
                console.log("DATATATAT", data)
                res.json(data)
            }



        //     console.log("USER ERR", err)
        //     console.log("USER DATA", data)
        //     if(err){
        //         res.json(err);
        //     }
        //     else{
        //         // Schedule.updateOne({_id: req.params.id}, {$push: {Breakfast_time: req.body.Breakfast_time, Lunch_time: req.body.Lunch_time, Dinner_time: req.body.Dinner_time}}, (err, data)=>{
        //         //     if(err){
        //         //         console.log(err);
        //         //         res.json(err);
        //         //     }
        //         //     else{
        //         //         console.log(data);
        //         //         res.json(data);
        //         //     }
                
        //         // })
        //         Schedule.
        //     }   
        })
    }, 
    login: (req, res)=>{
        console.log(" req.body: ", req.body);
        User.findOne({username:req.body.username}, (err, user) => {
            console.log("user", user)
            if (user) {
                console.log("we in the if statement boys")
                console.log("1: ", req.body.password, "2: ", user.password)
                bcrypt.compare(req.body.password, user.password).then( result => {
                    console.log(result)
                    if(result){
                        console.log("sucess.,!")
                        req.session.user_id = user._id;
                        req.session.first_name = user.first_name;
                        console.log("i am session user", req.session.user_id);
                        console.log("session", req.session)
                        res.json(user, req.session.user_id, req.session.first_name)
                    } 
                    else{
                        console.log("err")
                        res.redirect('/')
                    }    
                })
                .catch( error => {
                     console.log("something went wrong")
                })
            }
            else {
            
                res.redirect('/');
            }
        }) 
    },
    register: (req, res)=>{
        console.log("req.body: ", req.body);
        bcrypt.hash(req.body.password, 10).then(hashed_password => {
            
            User.create({first_name: req.body.first_name,  last_name: req.body.last_name, username: req.body.username, password: hashed_password}, (err, user)=>{
                if(err){
                    res.json(err);
                }
                else{
                   console.log(user);
                   req.session.user_id = user._id;
                   req.session.first_name = user.first_name;
                   console.log("i am session user", req.session.user_id);
                   res.json(user);
                }
            })
        })
        .catch(error => {
            console.log("something went wrong")
        });
        
    },
    users: (req, res)=>{
        User.find({}, (err, users)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(users);
            }
        })
    },
    sessionUser: (req, res)=>{
        console.log(req.session)
        console.log(req.session.user_id);
        User.findOne({_id: req.session.user_id}, (err, user)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(user);
            }
        })
        console.log(req.session.first_name)

    },
    logout: (req, res)=>{
        req.session.destroy();
        res.redirect('/')
    }
}