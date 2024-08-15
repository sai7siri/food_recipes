import React, {useEffect, useState } from 'react';

import FavCard from './FavCard';
import { getRandomColors } from './utils';


function Favorites() {
  const [loading , setLoading] = useState(true);

  const isFav = JSON.parse(localStorage.getItem("favs")) || [];

  useEffect(()=>{
    if(isFav && isFav.length === 0){
      setLoading(true);
    }else{
      setLoading(false);
    }
  }, [])

   

  return (
    <main className='bg-[#fcfccf] w-full h-screen'>
    <h1 className='text-center text-xl font-semibold font-mono my-4'>Favourites 😋</h1>
    {loading && <div className='flex items-center justify-center '>
      <span className='loading loading-spinner text-purple-950'></span> &nbsp;
     Haven't added any Recipes</div> }
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-10 max-w-screen-lg mx-auto'>

      {
        isFav && isFav.length > 0 &&
        isFav.map((items)=>(
          <FavCard key={items.label} recipes={items} {...getRandomColors()} />
        ))
      }
       
    </div>
      
    </main>
  )
}

export default Favorites