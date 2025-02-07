import { useEffect } from "react";
import { useState } from "react";

const Recipes = ({addRecipeQueue}) => {
    const [recipes,setRecipes]=useState([])
    useEffect(()=>{
fetch('recipes.json')
.then (res=>res.json())
.then(data=>setRecipes(data)
)
    },[])
    return (
        <div className="md:w-2/3">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {
            recipes.map(recipe=>(
                <div key={recipe.recipe_id} className="card bg-base-100  border-2">
  <figure className="px-6 pt-6">
    <img className="md:h-52 w-full rounded-xl"
      src={recipe.recipe_image}
      alt="recipe image" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-xl text-gray-800 font-semibold">{recipe.recipe_name}</h2>
    <p className="text-gray-500 text-base">{recipe.short_description}</p>
    <hr />
    <h3 className=" text-lg text-gray-800 font-medium">Ingredients : {recipe.ingredients.length}</h3>
    <ul>
        {
           recipe.ingredients.map((item,idx)=><li className="list-disc text-gray-500 text-base ml-6" key={idx}>{item}</li>)
        }
    </ul>
    <div className="flex gap-4">
        <div className="flex items-center gap-2">
        <i className="fa-regular fa-clock text-2xl"></i>
        <p>{recipe.preparing_time}</p>
        </div>
        <div className="flex items-center gap-2">
        <i className="fa-solid fa-fire text-2xl"></i>
        <p>{recipe.calories}</p>
        </div>
    </div>
    <div className="card-actions ">
      <button onClick={()=>addRecipeQueue(recipe)} className="btn bg-green-400 rounded-full px-8 text-xl text-gray-800 mt-4 font-medium">Want to Cook</button>
    </div>
  </div>
</div>
            ))
          }
          </div>
        </div>
    );
};

export default Recipes;