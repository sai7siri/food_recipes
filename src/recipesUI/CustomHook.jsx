

import React, { createContext, useState } from 'react';

export const Store = createContext();

function CustomHook({children}) {

   const [favs , setFavs] = useState([]);


  return (
      <Store.Provider value={{favs , setFavs}}>
         {children}         
      </Store.Provider>
  )
}

export default CustomHook;