import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Loader.css'

const RecipesList = ({ recipes }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const recipesPerPage = 6;
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [recipes]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <div className='outer border border-red-900 h-[50vh] flex justify-center items-center'>
                 <div class="center">
         <div class="ring"></div>
         <span>loading...</span>
      </div>

    </div>; 
  }

  return (
    <div className='flex flex-wrap gap-3 md:p-0 p-3'>
      {currentRecipes.map((recipe, index) => (
        <Link to={`/recipes/${recipe.recipe_id}`} key={index} className='block lg:w-[16rem] md:w-[22rem] w-full rounded-md p-2' style={{ border: "3px solid #000" }}>
          <div className='w-full h-[180px] overflow-hidden rounded-md mb-3'>
            <img src={recipe.image_url} alt="recipe-img" className='w-full h-[100%' />
          </div>
          <div className='py-2'>
            <h3 className='ms-2 text-xl font-semibold'>{recipe.title}</h3>
            <p className='ms-2 text-[gray] mb-5'>{recipe.publisher}</p>
            <div className='flex gap-3'>
              <Link to={`/recipes/${recipe.recipe_id}`} className='bg-[#1434A4] ms-2 text-white px-5 py-2 rounded font-semibold hover:bg-white hover:border border-[#1434A4] hover:text-[#1434A4] duration-300'>Details</Link>
              <a href={recipe.source_url} target='_blank' rel="noreferrer" className='bg-[#212529] ms-2 text-white px-5 py-2 rounded font-semibold hover:bg-white hover:border border-[#1434A4] hover:text-[#1434A4] duration-300'>Recipe Url</a>
            </div>
          </div>
        </Link>
      ))}
      {/* Pagination */}
      <div className="pagination w-full mt-3">
        {Array.from({ length: Math.ceil(recipes.length / recipesPerPage) }, (_, i) => (
          <button key={i + 1} onClick={() => paginate(i + 1)} className={currentPage === i + 1 ? "active" : ""} style={{ background: "#1434A4", padding: "3px 14px", marginRight: "8px", borderRadius: "4px", color: "#fff" }}>{i + 1}</button>
        ))}
      </div>
    </div>
  );
};

export default RecipesList;
