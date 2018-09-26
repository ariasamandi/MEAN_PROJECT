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
    time: {type: Date, required: [true, "enter time"]},
    name: {type: String, required: [true, "enter activity/mealtime"]}
});
const ScheduleSchema = mongoose.Schema({
    Breakfast_time: {type: Date, required: [true, "pick a time for breakfast"]},
    Lunch_time: {type: Date, required: [true, "pick a time for Lunch"]},
    Dinner_time: {type: Date, required: [true, "pick a time for Dinner"]},
    activities: [ActivitySchema],
    Breakfast: [BreakfastSchema],
    Lunch: [LunchSchema],
    Dinner: [DinnerSchema]

});
mongoose.model('Breakfast', BreakfastSchema);
mongoose.model('Lunch', LunchSchema);
mongoose.model('Dinner', DinnerSchema);
mongoose.model('Activity', ActivitySchema);
mongoose.model("Schedule", ScheduleSchema);