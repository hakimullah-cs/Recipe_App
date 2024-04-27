import React, { useEffect, useState } from 'react';
import NavBar from './common/NavBar';
import Footer from './common/Footer';
import { getRecipe } from '../services/api';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
    const [recipe, setRecipe] = useState({});
    const { recipeId } = useParams();

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await getRecipe(recipeId);
                if (result && result.recipe) {
                    setRecipe(result.recipe);
                }
            } catch (error) {
                console.error("Error fetching recipe:", error);
            }
        };

        getData();
    }, [recipeId]); 

    return (
        <>
            <NavBar />
            <main className='py-5 max-w-[1180px] w-full m-auto'>
                {Object.keys(recipe).length > 0 ? (
                    <div className='flex p-3 md:justify-between justify-center md:flex-nowrap flex-wrap'>
                        <div className='lg:w-[40%] md:w-[50%] w-full h-[350px]'>

                        <img src={recipe.image_url} alt="Recipe" className='w-full h-[100%]' />
                        </div>
                        <div className='md:w-[50%] w-full'>
                            <h3 className='text-3xl mb-2'>{recipe.title}</h3>
                            <p className='text-xl text-[grey] mb-5'>{recipe.publisher}</p>
                            <a href={recipe.publisher_url} className='bg-[#1434A4] text-white px-3 font-semibold py-2 rounded mr-2' target='_blank'>Publisher Webpage</a>
                            <a href={recipe.source_url} className='bg-black text-white font-semibold px-3 py-2 rounded mr-2' target='_blank'>Source Url</a>
                            <h5 className='mt-5 text-3xl underline mb-4'>Ingredients</h5>
                            <ul className='list-disc'>
                                {
                                    recipe && recipe.ingredients.map((ele)=>{
                                        return (
                                            <li className='text-[16px] mb-2'>{ele}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                ) : (
                    <div>Loading...</div>
                )}
            </main>
            <Footer />
        </>
    );
};

export default RecipeDetails;
