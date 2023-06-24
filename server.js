const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/recipeDB', { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log("Connected to mongodb");
})

app.get('/', (req, res) =>{
    res.render('addRecipe')
});

const Recipe = require("./models/recipe")
app.get("/getRecipes", async (req, res) =>{
    const recipes = await Recipe.find().then(()=>res.json())
    
    res.render('recipes',{ recipes });
})
app.post('/recipe/add',async (req,res) =>{
    const recipe = await Recipe.create(req.body)
    recipe.save().then(()=>res.redirect("recipes"))
})


app.set('view engine', 'ejs');
app.listen(3001,()=>{
    console.log('server is running on port 3001')
})
