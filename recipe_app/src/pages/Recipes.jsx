import React, { useEffect, useState } from 'react'
import NavBar from '../components/common/NavBar'
import Footer from '../components/common/Footer'
import Serach from '../components/Serach'
import RecipesList from '../components/RecipesList'
import  {getRecipes} from '../services/api'
const Recipes = () => {
  const [searchQuery,setSearchQuery]=useState('carrot');
  const [recipes,setrecipes]=useState([])

useEffect(()=>{
  getSearchResult();
},[searchQuery])

  const getSearchResult= async()=>{
        let result= await  getRecipes(searchQuery);
        if(result && result.recipes){
          setrecipes(result.recipes)
        }
  }

  console.log(searchQuery);
  return (
    <>
    <NavBar/>
    <main className='py-5 max-w-[1180px] w-full m-auto'>
      <section>
        <h3 className='text-5xl text-center mb-2'>All Recipes</h3>
        <p className='text-xl text-center'>See all recipes  and also search the recipes <br/>and filter out the particular category recipe.</p>
      </section>
      <div className='flex md:justify-between justify-center md:flex-nowrap flex-wrap mt-[4rem]'>
        <div className='md:w-[30%] w-full p-3'>
        <h3 className='text-3xl mb-2'>Filter Recipes</h3>
        <p className='mb-3'>Check multiple boxes below to <br/> narrow recipe search results</p>
        <Serach setSearchQuery={setSearchQuery}/>
        </div>
        <div className='md:w-[70%] w-full  p-3'>
        <RecipesList recipes={recipes}/>
        </div>

      </div>
    
   
    </main>
    <Footer/>
    </>
  )
}

export default Recipes