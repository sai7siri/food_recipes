

const colors = {
   green : {
      bg:"#44e371",
      badge : "#8c876c"
   },
   orange : {
      bg: "#e8ca1e",
      badge : "#32c7bd"
   },
   blue : {
      bg:"#32c7bd",
      badge:"#de5f6e"
   },
    mixed : {
      bg:"#b3a1a3",
      badge:"#de5f6e"
   }
}


export const getRandomColors=()=>{
   const clrName = Object.keys(colors);
   const randowIndex = Math.floor(Math.random() * clrName.length);
   const randomClr = clrName[randowIndex];
   return colors[randomClr]; 
}



