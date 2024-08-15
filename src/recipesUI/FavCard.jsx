import React, { useContext, useEffect, useState } from "react";
import { GoHeart } from "react-icons/go";
import { BiBowlHot } from "react-icons/bi";
import { FaHeartbeat , FaHeart} from "react-icons/fa";
import { Heart } from "lucide-react";
import { Store } from "./CustomHook";


const FavCard = ({ recipes , bg , badge}) => {

const [isFav, setIsFav] = useState(false);


// Initialize `isFav` based on localStorage data
useEffect(() => {
  const storedFavs = JSON.parse(localStorage.getItem("favs")) || [];
  
  // Ensure storedFavs is an array
  if (Array.isArray(storedFavs)) {
    setIsFav(storedFavs.some((item) => item.label === recipes.label));
  } else {
    console.error("Stored favorites is not an array:", storedFavs);
  }
}, [recipes.label]);

// Add or remove favorite from localStorage
const pickFavs = (e) => {
  e.preventDefault();

  let storedFavs = JSON.parse(localStorage.getItem("favs")) || [];
  
  // Ensure storedFavs is an array
  if (!Array.isArray(storedFavs)) {
    storedFavs = [];
  }

  if (isFav) {
    // If the recipe is already a favorite, remove it
    storedFavs = storedFavs.filter((item) => item.label !== recipes.label);
  } else {
    // If the recipe is not a favorite, add it
    storedFavs.push(recipes);
  }

  // Save the updated favorites list back to localStorage
  localStorage.setItem("favs", JSON.stringify(storedFavs));

  // Toggle the isFav state
  setIsFav(!isFav);
};


  
  const getTwoLbel = (arr) => {
    return [arr[7], arr[1]];
  };
 const healthLabels = getTwoLbel(recipes.healthLabels);

  return (
    <div className="border rounded-lg shadow-md p-2" style={{background:` ${bg} `}}>
      <div className="w-full relative">
        <a href={`https://www.youtube.com/results?search_query=${recipes.label} recipes`}
        target="_blank"
        >

        <div className="absolute skeleton w-full inset-0" />
        <img
          src={recipes.image}
          alt=""
          className=" h-32 w-full object-cover opacity-0 transition-opacity duration-500"
          onLoad={(e) => {
            e.currentTarget.style.opacity = 1;
            e.currentTarget.previousElementSibling.style.display = "none";
          }}
          />

        <div className="absolute top-2 right-2 p-1 bg-white rounded-full">

        <Heart strokeWidth={1.5} className={isFav ? "fill-red-500 text-red-500" : "hover:fill-red-500 hover:text-red-500"} 
        
        onClick={pickFavs}
        />

        </div>
        <div className="absolute bottom-1 left-1 rounded-full inline-flex items-center gap-1 bg-white p-1">
          <BiBowlHot />
          <span>{recipes.yield} servings</span>
        </div>
          </a>
      </div>
      <p className="capitalize font-bold">{recipes.label}</p>
      <p className="capitalize text-slate-700">{recipes.cuisineType} kitchen</p>

      <div className="flex text-sm gap-6">
        {healthLabels.map((h , i) => (
          <div key={i} className="flex items-center gap-1 p-1.5 rounded-full mt-2 text-white font-serif" style={{background : `${badge}`}}>
            <FaHeartbeat />
            <span>{h}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavCard 
