import React, { useEffect, useState } from "react";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);


  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("http://localhost:3001/getRecipes");
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecipes();
  }, []);
  return (
    <div>
      <h2>Recipe List</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <p>Title: {recipe.title}</p>
            <p>Description: {recipe.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
  };

export default RecipeList;