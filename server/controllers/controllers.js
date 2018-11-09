const mongoose = require('mongoose');
const Breakfast = mongoose.model('Breakfast');
const Lunch = mongoose.model('Lunch');
const Dinner = mongoose.model('Dinner');
const Activity = mongoose.model('Activity');
const Schedule = mongoose.model('Schedule');
const User = mongoose.model('User');
const bcrypt =  require('bcrypt-promise');
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
        //create passenger, then push to array
        console.log("this is the req.body", req.body);
        Breakfast.create(req.body, (err, breakfast)=>{
            if(err){
                console.log("Breakfast validations are TrIGeRRed")
                res.json(err);
            }
            else{
                console.log("this is the breakfast", breakfast)
                Schedule.update({_id: req.params.s_id}, {$push: {Breakfast: breakfast}}, (err, data)=>{
                    if(err){
                        console.log("couldnt update Schedule");
                        res.json(err);
                    }
                    else{
                        console.log("this is the data", data);
                        res.json(data);
                    }
                })
            }
        })
    },
    addLunch: (req, res)=>{
        //create passenger, then push to array
        Lunch.create(req.body, (err, lunch)=>{
            if(err){
                console.log("Lunch validations are TrIGeRRed")
                res.json(err);
            }
            else{
                Schedule.update({_id: req.params.s_id}, {$push: {Lunch: lunch}}, (err, data)=>{
                    if(err){
                        console.log("couldnt update Schedule");
                        res.json(err);
                    }
                    else{
                        res.json(data);
                    }
                })
            }
        })
    },
    addDinner: (req, res)=>{
        //create passenger, then push to array
        Dinner.create(req.body, (err, dinner)=>{
            if(err){
                console.log("Dinner validations are TrIGeRRed")
                res.json(err);
            }
            else{
                Schedule.update({_id: req.params.s_id}, {$push: {Dinner: dinner}}, (err, data)=>{
                    if(err){
                        console.log("couldnt update Schedule");
                        res.json(err);
                    }
                    else{
                        res.json(data);
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
        Schedule.create(req.body, (err, schedule)=>{
            console.log("hi", schedule)
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
    },
    editSchedule: (req, res)=>{
        console.log("we in motion")
        Schedule.update({_id: req.params.id}, req.body, (err, data)=>{
            if(err){
                res.json(err);
            }
            else{
                res.json(data);
            }
        })
    }, 
    login: (req, res)=>{
        console.log(" req.body: ", req.body);
        User.findOne({username:req.body.username, password: req.body.password}, (err, user) => {
            console.log("user", user)
            if (user) {
                console.log("we in the if statement boys")
                bcrypt.compare('password_from_form', 'stored_hashed_password').then( result => {
                    if(result){
                        console.log("sucess!")
                        req.session.user_id = user._id;
                        req.session.first_name = user.first_name;
                    } 
                    else{
                        
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
        User.create(req.body, (err, user)=>{
            if(err){
                res.json(err);
            }
            else{
                bcrypt.hash('password_from_form', 10).then(hashed_password => {

                })
                .catch(error => {
                });
            }
        })
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
    }
}