const mongoose = require('mongoose');
const recipeSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    }
})
const Recipe = mongoose.model('Recipe',recipeSchema);

module.exports = Recipe;
