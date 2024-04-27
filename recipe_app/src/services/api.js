import axios from 'axios' 
import { API_URL } from '../Constants/constants'
export const getRecipes= async(searchQuery)=>{
    try {
      let reponse= await axios.get(`${API_URL}/search?q=${searchQuery}`)
      return reponse.data;
    } catch (error) {
        console.log("There is some error in Api:",error.message)
        return error.reponse
    }
}
export const getRecipe = async (searchedQuery) => {
    try {
        let response = await axios.get(`${API_URL}/get?rId=${searchedQuery}`);
        return response.data;
    } catch (error) {
        console.log('Error while calling the api ', error.message);
        return error.response
    }
}