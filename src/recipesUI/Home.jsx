import React, { useEffect, useState } from "react";
import SideBar from "./Sidebar.jsx";
import { FaSearch } from "react-icons/fa";
import FavCard from "./FavCard.jsx";
import { getRandomColors } from "./utils.js";

const API_ID = import.meta.env.VITE_APP_ID;
const API_KEY = import.meta.env.VITE_APP_KEY;

const Home = () => {
  const [dish, setDish] = useState([]);
  const [loading, setLoading] = useState(false);
  const [term , setTerm] = useState("");

  const fetchDishes = async (searchdish) => {
    const url = ` https://api.edamam.com/api/recipes/v2?app_id=${API_ID}&app_key=${API_KEY}&q=${searchdish}&type=public`;

    try {
      setLoading(true);
      setDish([]);
      const res = await fetch(url);
      const result = await res.json();
      setDish(result.hits);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchDishes("fruits");
  }, []);

    const handleSearch=(e)=>{
      e.preventDefault();
      fetchDishes(term);
    }



  return (
    <div className="flex-1 bg-[#fcfcd7] ">
      <div className="max-w-screen-lg mx-auto p-10  md:mt-14">
        {/* search input */}
        <form onSubmit={handleSearch}>
          <label className="input shadow-md flex items-center gap-2">
            <FaSearch size={"20"} />
            <input
              type="text"
              className=""
              placeholder="Search.....recipes 😋"
              onChange={(e)=> setTerm(e.target.value)}
            />
          </label>
        </form>
        <p className="font-semibold text-3xl py-2">Recommended Dishes</p>
        <p className="capitalize font-medium text-slate-600">popular choices</p>

        {/* boxes items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

          {!loading &&
            dish?.map((items, index) => <FavCard key={index} recipes={items.recipe} {... getRandomColors()} /> )}

          {loading &&
            [...Array(9)].map((_, i) => (
              <div key={i} className="flex flex-col gap-4 w-full">

                <div className="skeleton h-32 w-full"></div>
                <div className="flex justify-between">
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-24"></div>
                </div>
               <div className="skeleton h-4 w-1/2"></div>
                
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
