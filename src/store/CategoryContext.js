import {createContext,useState} from 'react'

export const CategoryContext =createContext(null)

 function Category({children}) {
   const [categoryDetails,setCategoryDetails] =useState()
   
   return(
     <CategoryContext.Provider value={{categoryDetails,setCategoryDetails}}>
      {children}
     </CategoryContext.Provider>
     )
 }
 export default Category