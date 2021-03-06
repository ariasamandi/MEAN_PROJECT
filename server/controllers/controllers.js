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
        Breakfast.create(req.body, (err, breakfast)=>{
            if(err){
                console.log(err);
                res.json(err);
            }
            else{
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
            }
        })
    },
    addLunch: (req, res)=>{
        Lunch.create(req.body, (err, lunch)=>{
            if(err){
                console.log(err);
                res.json(err);
            }
            else{
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
            }
        })

    },
    addDinner: (req, res)=>{
        Dinner.create(req.body, (err, dinner)=>{
            if(err){
                console.log(err);
                res.json(err);
            }
            else{
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
        console.log("we in motion")
        console.log(req.session);
        console.log(req.body);
        console.log("session id: ", req.session.first_name)
        console.log("BODY", req.body);
        Schedule.create(req.body, (err, data)=>{
            if(err){
                console.log(err);
                res.json(err);
            }
            else{
                console.log("data", data);
                User.findOneAndUpdate({_id: req.session.user_id}, 
                {
                    "$push": {
                        "schedule" : data
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
            }
        })

    },
    //     console.log("user session", req.session.first_name)
    //     User.findOne({first_name: req.session.first_name}, (err, user)=>{
    //         console.log("hi", user)
    //         if(err){
    //             res.json(err);
    //         }
    //         else{
    //             User.update({_id: user._id}, {$push: {schedule: req.body}}, (err, data)=>{
    //                 if(err){
    //                     res.json(err)
    //                 }
    //                 else{
    //                     console.log("SUCCC!")
    //                     console.log("data", data)
    //                     res.json(data); 
    //                 }
    //         })
    //     }
    // })
    
    // },
        // Schedule.create(req.body, (err, schedule)=>{
        //     if(err){
        //         console.log(err);
        //         res.json(err);
        //     }
        //     else{
        //         console.log("schedule", schedule);
        //         console.log("schedule id ", schedule._id)
        //         User.findOneAndUpdate({first_name: req.session.user_id, "schedule._id" : schedule._id}, 
        //     {
        //         "$set": {
        //             "schedule.$._id": schedule._id,
        //             "schedule.$.Breakfast_time": schedule.Breakfast_time,
        //             "schedule.$.Lunch_time": schedule.Lunch_time,
        //             "schedule.$.Dinner_time": schedule.Dinner_time,
        //     }
        // },
            
        // (err, data)=>{
        //     if(err){
        //         console.log("ERROROROROR", err);
        //         res.json(err)
        //     } else {
        //         console.log("DATATATAT", data)
        //         res.json(schedule)
        //     }
        // })
        //         // console.log("user session", req.session.first_name)
        //         // User.findOne({first_name: req.session.first_name}, (err, user)=>{
        //         //     console.log("hi", user)
        //         //     if(err){
        //         //         res.json(err);
        //         //     }
        //         //     else{
        //         //         User.update({_id: user._id}, {$push: {schedule: schedule}}, (err, data)=>{
        //         //             if(err){
        //         //                 res.json(err)
        //         //             }
        //         //             else{
        //         //                 console.log("SUCCC!");
        //         //                 console.log(data)
        //         //                 res.json(data);
        //         //             }
        //         //     })
        //         // }
        //         // })
        //     }
        // })
       
        // console.log("we in motion")
        // console.log(req.session);
        // console.log(req.body);
        // console.log(req.params.id);
        // console.log("session id: ", req.session.first_name)
        // console.log("BODY", req.body);
        
        // User.findOneAndUpdate({first_name: req.session.first_name, "schedule._id" : req.body._id}, 
        //     {
        //         "$set": {
        //             "schedule.$.Breakfast_time": req.body.Breakfast_time,
        //             "schedule.$.Lunch_time": req.body.Lunch_time,
        //             "schedule.$.Dinner_time": req.body.Dinner_time,
        //     }
        // },
            
        // (err, data)=>{
        //     if(err){
        //         console.log("ERROROROROR", err);
        //         res.json(err)
        //     } else {
        //         console.log("DATATATAT", data)
        //         res.json(data)
        //     }
    //     console.log("user session", req.session.first_name)
    //     User.findOne({first_name: req.session.first_name}, (err, user)=>{
    //         console.log("hi", user)
    //         if(err){
    //             res.json(err);
    //         }
    //         else{
    //             Schedule.create(req.body, (err, schedule)=>{
    //                 if(err){
    //                     res.json(err);
    //                 }
    //                 else{
    //                     console.log("user create: ", schedule);
    //                     User.update({_id: user._id}, {$push: {schedule: schedule}}, (err, data)=>{
    //                         if(err){
    //                             res.json(err)
    //                         }
    //                         else{
    //                             console.log("SUCCC!")
    //                             console.log("Data", data)
    //                             res.json(data);
    //                         }
    //                 })
    //                 }
    //             })
               
    //     }
    // })
        // })

 
    // },
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
        // console.log("we in motion")
        // console.log(req.session);
        // console.log(req.body);
        // console.log(req.params.id);
        // console.log("session id: ", req.session.first_name)
        // console.log("BODY", req.body);
        // console.log("breakfast tuime", req.body.Breakfast_time);
        // Schedule.create({Breakfast_time: req.body.Breakfast_time, Lunch_time: req.body.Lunch_time, Dinner_time: req.body.Dinner_time}, (err, schedule1)=>{
        //     if(err){
        //         console.log(err);
        //         res.json(err);
        //     }
            // else{
                // User.update({first_name: req.session.first_name}, {$push: {schedule: schedule}}, (err, data)=>{
                //     if(err){
                //         console.log(err);
                //         res.json(err);
                //     }
                //     else{
                //         console.log(data);
                //         res.json(data);
                //     }
                // })

                // User.findOne({first_name: req.session.first_name}, (err, user)=>{
                //     console.log("user", user);
                //     // schedule = user.schedule.id(req.params.id);
                //     console.log("user schedule breakfast time", user.schedule[0].Breakfast_time);
                //     user.schedule[0].Breakfast_time = req.body.Breakfast_time;
                //     user.schedule[0].Lunch_time = req.body.Lunch_time;
                //     user.schedule[0].Dinner_time = req.body.Dinner_time;
                //     console.log("end user", user.schedule[0]);
                //     user.schedule[0].save();
                //     res.json(user.schedule[0]);
                // })
                // User.findOneAndUpdate({first_name: req.session.first_name, "schedule._id" : req.params.id}, 
                //     { 
                //         "$set": {
                //             "schedule[0].$.Breakfast_time": req.body.Breakfast_time,
                //             "schedule[0].$.Lunch_time": req.body.Lunch_time,
                //             "schedule[0].$.Dinner_time": req.body.Dinner_time,
                //     }
                // },
                      
                // (err, data)=>{
                //     if(err){
                //         console.log("ERROROROROR", err);
                //         res.json(err);
                //     } else {
                //         console.log("DATATATAT", data)
                //         res.json(data);
                //     }
                // })
        })
}, 
    login: (req, res)=>{
        User.findOne({username:req.body.username}, (err, user) => {
            if(user==null){
                err = "Username or Password is invalid"
                res.json(err);
            }
            if (user) {
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
                        console.log("2, Username or Password is invalid");
                        res.json("Username or Password is invalid");
                    }   
                })
                .catch( error => {
                     console.log("something went wrong")
                })
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
    },
    deleteBreakfast: (req, res)=>{
        User.findOne({_id: req.session.user_id}, (err, user)=>{
            if(err){
                console.log(err);
                res.json(err);
            }
            else{
                user.schedule[0].Breakfast.id(req.params.id).remove();
                user.save(function (err) {
                    if (err) return handleError(err);
                    console.log('the subdocs were removed');
                    res.json(user.schedule[0]);
                  });
            }
        })

    },
    deleteLunch: (req, res)=>{
        User.findOne({_id: req.session.user_id}, (err, user)=>{
            if(err){
                console.log(err);
                res.json(err);
            }
            else{
                console.log(user.schedule[0].Lunch);
                console.log(req.params.id);
                user.schedule[0].Lunch.id(req.params.id).remove();
                user.save(function (err) {
                    if (err) return handleError(err);
                    console.log('the subdocs were removed');
                    res.json(user.schedule[0]);
                  });
            }
        })
    },
        deleteDinner: (req, res)=>{
        User.findOne({_id: req.session.user_id}, (err, user)=>{
            if(err){
                console.log(err);
                res.json(err);
            }
            else{
                user.schedule[0].Dinner.id(req.params.id).remove();
                user.save(function (err) {
                    if (err) return handleError(err);
                    console.log('the subdocs were removed');
                    res.json(user.schedule[0]);
                  });
            }
        })

    },
}