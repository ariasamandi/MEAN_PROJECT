const mongoose = require('mongoose');

const BreakfastSchema = mongoose.Schema({
    name: {type: String, required: [true, "must enter name of food"]},
    calories: {type: Number, required: [true, "enter amount of calories"]},
    protein: {type: Number, required: [true, "enter amount of protein"]},
    fat: {type: Number, required: [true, "enter amount of fat"]},
    carbs: {type: Number, required: [true, "enter amount of carbs"]},
});
const LunchSchema = mongoose.Schema({
    name: {type: String, required: [true, "must enter name of food"]},
    calories: {type: Number, required: [true, "enter amount of calories"]},
    protein: {type: Number, required: [true, "enter amount of protein"]},
    fat: {type: Number, required: [true, "enter amount of fat"]},
    carbs: {type: Number, required: [true, "enter amount of carbs"]},
});
const DinnerSchema = mongoose.Schema({
    name: {type: String, required: [true, "must enter name of food"]},
    calories: {type: Number, required: [true, "enter amount of calories"]},
    protein: {type: Number, required: [true, "enter amount of protein"]},
    fat: {type: Number, required: [true, "enter amount of fat"]},
    carbs: {type: Number, required: [true, "enter amount of carbs"]},
});
const ActivitySchema = mongoose.Schema({
    time: {type: String, required: [true, "enter time"]},
    name: {type: String, required: [true, "enter activity/mealtime"]}
});
const ScheduleSchema = mongoose.Schema({
    Breakfast_time: {type: String, required: [true, "pick a time for breakfast"]},
    Lunch_time: {type: String, required: [true, "pick a time for Lunch"]},
    Dinner_time: {type: String, required: [true, "pick a time for Dinner"]},
    activities: [ActivitySchema],
    Breakfast: [BreakfastSchema],
    Lunch: [LunchSchema],
    Dinner: [DinnerSchema]

});
const UserSchema = mongoose.Schema({
    first_name: {type: String, required: [true, "must enter first name"]},
    last_name: {type: String, required: [true, "must enter last name"]},
    username: {type: String, required: [true, "must enter username"]},
    password: {type: String, required: [true, "must enter password"]},
    schedule: [ScheduleSchema]
})
mongoose.model('User', UserSchema);
mongoose.model('Breakfast', BreakfastSchema);
mongoose.model('Lunch', LunchSchema);
mongoose.model('Dinner', DinnerSchema);
mongoose.model('Activity', ActivitySchema);
mongoose.model("Schedule", ScheduleSchema);