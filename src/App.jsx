import { useState } from "react";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import OurRecipes from "./Components/OurRecipes";
import Recipes from "./Components/Recipes";
import Sidebar from "./Components/Sidebar";

const App = () => {
  const[recipeQueue,setRecipeQueue]=useState([])
  const[preparedRecipe,setPreparedRecipe]=useState([])
  const[totalTime,setTotalTime]=useState(0)
  const[totalCalories,setTotalCalories]=useState(0)


  const addRecipeQueue=(recipe)=>{
    // console.log("adding",recipe);
    const isExist=recipeQueue.find(previousRecipeQueue=>previousRecipeQueue.recipe_id===recipe.recipe_id)
    if (!isExist) {
      const newRecipeQueue=[...recipeQueue,recipe]
    setRecipeQueue(newRecipeQueue)
    }
    else{
      alert('Recipe already exist in the queue')
    }
    
  }

  const handleRemove=(id)=>{
    //find which recipe to remove
    const deletedRecipe = recipeQueue.find(recipe=>recipe.recipe_id===id)
    // delete recipe from cook table 
    const updatedQueue = recipeQueue.filter(recipe=>recipe.recipe_id!==id)
    setRecipeQueue(updatedQueue)
    setPreparedRecipe([...preparedRecipe,deletedRecipe])
  }

  const calculateTimeAndCalories=(time,calorie)=>{
    setTotalTime(totalTime + parseInt(time))
    setTotalCalories(totalCalories + parseInt(calorie))
  }
  return (
    <div className="container mx-auto py-4">
      <Header></Header>
      <Banner></Banner>
      <OurRecipes></OurRecipes>
      <section className="flex flex-col md:flex-row gap-6">
      <Recipes addRecipeQueue={addRecipeQueue}></Recipes>
      <Sidebar handleRemove={handleRemove} recipeQueue={recipeQueue} preparedRecipe={preparedRecipe} calculateTimeAndCalories={calculateTimeAndCalories} totalCalories={totalCalories} totalTime={totalTime}></Sidebar>
      </section>
    </div>
  );
};

export default App;