const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/recipeDB', { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log("Connected to mongodb");
})

app.get('/', (req, res) =>{
    res.render('addRecipe')
});

const Recipe = require("./models/recipe")
app.get("/getRecipes", async (req, res) =>{
    const recipes = await Recipe.find()
    res.json(recipes);
    
    res.render('recipes',{ recipes });
})
//add
app.post('/recipe/add',async (req,res) =>{
    const recipe = await Recipe.create(req.body)
    recipe.save().then(()=>res.json())
})
//update

app.put('/recipe/update/:id',async (req,res) =>{
    const recipe = await Recipe.findByIdAndUpdate(req.params.id,req.body)
    recipe.save().then(()=>res.json())
})
//delete

app.delete('/recipe/delete/:id',async (req,res) =>{
    const recipe = await Recipe.findByIdAndDelete(req.params.id)
    recipe.save().then(()=>res.json())
})
  
app.set('view engine', 'ejs');
app.listen(3001,()=>{
    console.log('server is running on port 3001')
})
