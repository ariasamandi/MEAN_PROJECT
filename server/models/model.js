const mongoose = require('mongoose');

const FoodSchema = mongoose.Schema({
    name: {type: String, required: [true, "must enter name of food"]},
    calories: {type: Number, required: [true, "enter amount of calories"]},
    protein: {type: Number, required: [true, "enter amount of protein"]},
    fat: {type: Number, required: [true, "enter amount of fat"]},
    carbs: {type: Number, required: [true, "enter amount of carbs"]},
});
mongoose.model('Food', FoodSchema);