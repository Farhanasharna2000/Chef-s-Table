
const Sidebar = ({recipeQueue,handleRemove,preparedRecipe,calculateTimeAndCalories,totalTime,totalCalories}) => {
    return (
        <div className="md:w-1/3 border-2 rounded-2xl text-gray-800 p-4 bg-base-100">
           
          {/* want to cook table  */}
          <div className="overflow-x-auto">
          <h3 className="text-2xl font-bold text-center border-b-2 pb-4">Want to cook : {recipeQueue.length}</h3>
  <table className="table">
    {/* head */}
    <thead className="text-base">
      <tr >
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>

      </tr>
    </thead>
    <tbody className="text-gray-400 ">
      {recipeQueue.map((recipe,idx)=> (<tr key={idx} className="hover">
        <th>{idx+1}</th>
        <td>{recipe.recipe_name}</td>
        <td>{recipe.preparing_time}</td>
      <td>{recipe.calories}</td>
        <td><button onClick={()=>{handleRemove(recipe.recipe_id)
          calculateTimeAndCalories(recipe.preparing_time,recipe.calories)
        }} className=" bg-green-400 rounded-full md:px-4 px-2 py-1 my-2 font-medium text-gray-800  ">Preparing</button></td>
      </tr>))}
    </tbody>
  </table>
</div>
          {/* currently cooking table  */}
          
          <div className="overflow-x-auto">
          <h3 className="text-2xl font-bold text-center border-b-2 pb-4 mt-6">Currently cooking : {preparedRecipe.length}</h3> 
  <table className="table">
    {/* head */}
    <thead className="text-base">
      <tr >
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
    <tbody className="text-gray-400 ">
      {preparedRecipe.map((recipe,idx)=> (
        <tr key={idx} className="hover">
        <th>{idx+1}</th>
        <td>{recipe.recipe_name}</td>
        <td>{recipe.preparing_time}</td>
      <td>{recipe.calories}</td>
       
      </tr>))}
      <tr className="border-none">
        <th></th>
        <td></td>
        <td>Total Time = {totalTime}</td>
      <td>Total Calories = {totalCalories}</td>       
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Sidebar;