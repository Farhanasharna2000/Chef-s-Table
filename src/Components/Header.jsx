
const Header = () => {
    return (
        <div className="flex flex-col md:flex-row md:justify-between items-center my-8 space-y-4">
           <h2 className="text-3xl font-bold text-gray-800">Recipe Calories</h2> 
           <ul className="flex gap-6 text-gray-600 font-semibold text-base">
            <li><a href="">Home</a></li>
            <li><a href="">Recipes</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Search</a></li>
           </ul>
           <div className="flex flex-row justify-between items-center gap-4">
<div className="flex justify-between items-center relative">
<input className="py-4 px-10 bg-gray-100 rounded-full placeholder-gray-800 outline-none" type="text" name="" id="" placeholder="Search"/>
<div className="absolute flex items-center -left-1 pl-4 text-2xl">
<i className="fa-solid fa-magnifying-glass"></i>
</div>
</div>
<div className="flex justify-center items-center rounded-full w-12 h-12 bg-green-400">
<i className="fa-regular fa-user text-3xl"></i>
</div>
           </div>
        </div>
    );
};

export default Header;