const mongoose = require('mongoose');

const FoodSchema = mongoose.Schema({
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
    Breakfast: {type: String, required: [true, "pick a time for breakfast"]},
    Lunch: {type: String, required: [true, "pick a time for Lunch"]},
    Dinner: {type: String, required: [true, "pick a time for Dinner"]},
    activities: [ActivitySchema]

});
mongoose.model('Food', FoodSchema);
mongoose.model('Activity', ActivitySchema);
mongoose.model("Schedule", ScheduleSchema);